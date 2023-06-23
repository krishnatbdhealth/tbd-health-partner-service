import AWS from 'aws-sdk';
import { Order } from '../models/Orders/Order';
import { Kit } from '../models/Kit/Kit';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function createOrder(order: Order): Promise<Order> {
  const params = {
    TableName: 'Order-sandbox',
    Item: order,
  };

  return await dynamoDb.put(params).promise().then(() => order);
}

export async function getAllOrder(): Promise<any> {
    const params = {
      TableName: 'Order-sandbox',
    };
  
    return await dynamoDb.scan(params).promise()
      .then((data) => {
        if (data.Items) {
          return data.Items;
          
        } else {
          return []; 
        }
      });
  }

  export async function getOrderById(orderId: string): Promise<any> {
    const params = {
      TableName: 'Order-sandbox',
      Key: {
        orderId: orderId,
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item);
  }
  
  export async function updateOrder(orderId: string, order: Order): Promise<any> {
    const params = {
      TableName: 'Order-sandbox',
      Key: {
        id: orderId,
      },
     
      UpdateExpression: 'SET #r = :recipient, #s = :shipping, #l = :lineItems, #a = :address, #m = :metadata, #st = :status, #k = :kitId, #po = :parentOrderId, #pbs = :preferBulkShipping',
      ExpressionAttributeNames: {
        '#r': 'recipient',
        '#s': 'shipping',
        '#l': 'lineItems',
        '#a': 'address',
        '#m': 'metadata',
        '#st': 'status',
        '#k': 'kitId',
        '#po': 'parentOrderId',
        '#pbs': 'preferBulkShipping',
      },
      ExpressionAttributeValues: {
        // ':recipient': order.recipient.id,
        ':shipping': {
          id: order.shipping.id,
          name: order.shipping.name,
          minTime: order.shipping.minTime,
          maxTime: order.shipping.maxTime,
          timeUnit: 'DAYS'
        },
        ':lineItems': {
          id: order.products.id,
          variant_id: order.products.variantId,
          quantity: order.products.qty,
          name: order.products.name,
          type: order.products.type
        },
        ':address': {
          address1: order.shippingAddress.street1, 
          address2: order.shippingAddress.street2,
          city: order.shippingAddress.city,
          province_code: order.shippingAddress.state,
          zip: order.shippingAddress.zip,
          country: order.shippingAddress.country //
        },
      
        ':metadata': order.metadata, 
        ':status':  order.status ,
        ':kitId': order.kitId ,
        ':parentOrderId': order.parentOrderId ,
        ':preferBulkShipping': order.preferBulkShipping,
      },
      
      ReturnValues: 'ALL_NEW',
    };
  
    return await dynamoDb.update(params).promise()
      .then((data) => {
        return data.Attributes as Order; // Return the updated order
      });
  }
  
  export async function deleteOrder(orderId: string): Promise<void> {
    const params = {
      TableName: 'Order-sandbox',
      Key: {
        orderId: orderId,
      },
    };
  
    return await dynamoDb.delete(params).promise().then(() => {
        return void 0; 
      });
  }

  export async function addRecipientToOrder(orderId: string, recipientId: string):Promise<Order>  {
    try {
      const params = {
        TableName: 'Order-sandbox',
        Key: {
          orderId: orderId,
        },
        UpdateExpression: 'SET #recipient = :recipient',
        ExpressionAttributeNames: {
          '#recipient': 'recipient',
        },
        ExpressionAttributeValues: {
          ':recipient': recipientId,
        },
        ReturnValues: 'ALL_NEW',
      };
  
      const result = await dynamoDb.update(params).promise();
      return result.Attributes as Order;
    } catch (error) {
      console.error('Error adding recipient to order:', error);
      throw new Error('Error adding recipient to order');
    }
  }

  export async function addPersonToKit(kitId: string, personId: string): Promise<Kit>  {
    try {
      const params = {
        TableName: 'Kit-sandbox',
        Key: {
          kitId: kitId,
        },
        UpdateExpression: 'SET #personId = :personId',
        ExpressionAttributeNames: {
          '#personId': 'personId',
        },
        ExpressionAttributeValues: {
          ':personId': personId,
        },
        ReturnValues: 'ALL_NEW',
      };
  
      const result = await dynamoDb.update(params).promise();
      return result.Attributes as Kit;
    } catch (error) {
      console.error('Error adding recipient to order:', error);
      throw new Error('Error adding recipient to order');
    }
  }