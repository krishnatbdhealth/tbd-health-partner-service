
import { NextApiRequest, NextApiResponse } from 'next';
import { Order } from '../../../../src/models/Orders/Order';
import { createOrderService, getOrderService } from '../../../../src/service/orderService';
import { validateOrderPayload } from '../../../../src/utils/requestUtils';


export default async function handleOrderRequest(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const payload : Order = req.body;

    // Validate the request payload
    // if (!validateOrderPayload(payload)) {
    //   res.status(400).json({ error: 'Invalid order payload' });
    //   return;
    // }

    

    const order: Order = {
      orderId: payload.id, 
      recipient: {
        // id: payload.recipient.id, 
      },
      shipping: {
        id: payload.shipping.id , 
        name: payload.shipping.name, 
        minTime: payload.shipping.minTime, 
        maxTime: payload.shipping.maxTime, 
        timeUnit: payload.shipping.timeUnit, 
      },
      products: {
        id: payload.products.id,
        variantId: payload.products.variantId,
        name: payload.products.name, 
        qty: payload.products.qty, 
        type: 'AT_HOME_TEST_KIT'
      },
      shippingAddress: {
        street1: payload.shippingAddress.street1,
        street2: payload.shippingAddress.street2,
        city: payload.shippingAddress.city,
        state: payload.shippingAddress.state,
        zip: payload.shippingAddress.zip,
        country: payload.shippingAddress.country
      },
      metadata: [], 
      status: 'PENDING', 
      kitId: payload.kitId, 
      parentOrderId: payload.parentOrderId, 
      preferBulkShipping: false, 
    };
    
    console.log(order)
    try {
     
      const createdOrder = await createOrderService(order);
      res.status(201).json(createdOrder);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if(req.method === 'GET'){
    try {
      const order = await getOrderService();
      console.log(order);
      res.status(200).json(order);

    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Order not found' });
    }    
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

