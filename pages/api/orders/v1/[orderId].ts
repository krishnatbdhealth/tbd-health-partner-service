import { NextApiRequest, NextApiResponse } from 'next';
import { getOrderByIdService, updateOrderService, deleteOrderService } from '../../../../src/service/orderService';
import { Order, ShippingMethod } from '@/src/models/Orders/Order';
import { Product } from '@/src/models/Orders/Product';
import { ShippingAddress } from '@/src/models/Orders/shippingAddress';


export default async function orderHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const { orderId } = query;
  const payload = req.body;

  switch (method) {
    case 'GET':
      try {
        const response = await getOrderByIdService(orderId as string);
        res.status(200).json(response);
      } catch (error) {
        res.status(404).json({ message: 'Order not found' });
      }
      break;

    case 'PATCH':
      try {
        const updatedOrderData = req.body;
        const order = await getOrderByIdService(orderId as string);
        if(order.status === "PENDING"){
          console.log(updatedOrderData)
          const updatedOrder = await updateOrderService(orderId as string, updatedOrderData);
        res.status(200).json("Order Updated");
        } 
        else{
          res.status(400).json({ message: "Order Processed, can't Update" });
        } 
        
      } catch (error) {
        res.status(400).json({ message: 'Invalid request' });
      }
      break;

    case 'DELETE':
      try {
        const order = await getOrderByIdService(orderId as string);
        if(order.status === "PENDING"){
          await deleteOrderService(orderId as string);
        res.status(204).end();
        } 
        else{
          res.status(400).json({ message: "Order Processed, can't cancel" });
        } 
       
      } catch (error) {
        res.status(404).json({ message: 'Order not found' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
