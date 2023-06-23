// src/service/orderService.ts

import { Order, ShippingMethod } from '../models/Orders/Order';
import { createOrder, getAllOrder, getOrderById, updateOrder, deleteOrder, addRecipientToOrder, addPersonToKit } from '../dao/orderDao';
import { ShippingAddress } from '../models/Orders/shippingAddress';
import { Product } from '../models/Orders/Product';

export function createOrderService(order: Order): Promise<Order> {
console.log(order)
  if (order.products.qty === 0 ) {
    throw new Error('Order must have at least one item');
  }
  return createOrder(order);
}



export async function getOrderService(): Promise<any[]> {
  const orders = await getAllOrder();
  const formattedOrders = orders.map((response: any) => {
    let address = {};
    let lineItems = [];

    try {
      address = JSON.parse(response.address || '{}');
      lineItems = JSON.parse(response.lineItems || '[]');
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
    
    const shippingMethod = {
      id: '',
      name: '',
      minTime: '',
      maxTime: '',
      timeUnit: 'DAYS',
    };

    const shippingAddress = {
      street1: address.address1,
      street2: address.address2,
      city: address.city,
      state: address.province_code,
      zip: address.zip,
      country: address.country || '',
    };

    const products = lineItems.map((item: any) => {
      return {
        id: item.product_id,
        variantId: item.variant_id,
        qty: item.quantity,
        name: item.name,
        type: 'AT_HOME_TEST_KIT',
      };
    });

    return {
      id: response.orderId,
      recipient: '',
      shipping: shippingMethod,
      products: products,
      shippingAddress: shippingAddress,
      metadata: response.metadata || "This field is not available in the response",
      status: response.status,
      kitId: response.kitId,
      parentOrderId: response.parent_order_id || "This field is available in the order and not in sandbox",
      preferBulkShipping: response.preferBulkShipping || true,
    };
  });

  return formattedOrders;
  }
  
export async function getOrderByIdService(orderId: string): Promise<Order> {
  const response = await getOrderById(orderId);
  const address = JSON.parse(response.address);    
            const lineItems = JSON.parse(response.lineItems);
    
            const shippingMethod: ShippingMethod = { //  This field is not available in the response
              id: '',
              name: '',
              minTime: '',
              maxTime: '',
              timeUnit: 'DAYS',
            };
    
            
    
            const shippingAddress: ShippingAddress = {
              street1: address.address1,
              street2: address.address2,
              city: address.city,
              state: address.province_code,
              zip: address.zip,
              country: address.country || '', //  This field is not available in the response
            };
            const orderData: Order = {
              id: response.orderId,
              recipient: '',
              shipping: shippingMethod,
              products: lineItems.map((item: any) => {
                const res: Product = {
                  id: item.product_id, 
                  variantId: item.variant_id,
                  qty: item.quantity,
                  name: item.name,
                  type: 'AT_HOME_TEST_KIT',
                };
                return res;
              })
              ,
              
              shippingAddress: shippingAddress,
              metadata: response.metadata || "This field is not available in the response",  //  This field is not available in the response
              status: response.status,
              kitId: response.kitId,
              parentOrderId: response.parent_order_id || "This field is available in the order and not in sandbox",  //  This field is available in the order and not in sandbox
              preferBulkShipping: response.preferBulkShipping || true,  //  This field is not available in the response

            };


            return orderData;

  }
  
  export function updateOrderService(orderId : string,order: Order): Promise<Order> {
   
    return updateOrder(orderId,order);
  }
  
  export function deleteOrderService(orderId: string): Promise<void> {
   
    return deleteOrder(orderId);
  }

  export function addRecipientToOrderService(orderId: string, id:string): Promise<any> {
   
    return addRecipientToOrder(orderId,id);
  }

  export function addPersonToKitService(kitId: string, personId:string): Promise<any> {
   
    return addPersonToKit(kitId, personId);
  }