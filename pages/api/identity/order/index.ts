// pages/api/orders/[orderId].ts

import { getKitInfoByIdService } from '@/src/service/kitsService';
import { getOrderByIdService } from '@/src/service/orderService';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function orderHandler(req: NextApiRequest, res: NextApiResponse) {
  const { orderId } = req.query;
  
let  kitId ;
  if(req.method === 'GET'){
    try {
      const order = await getOrderByIdService(orderId as string);
      kitId = order.kitId
      // const kit = await getKitInfoByIdService(kitId as string);
      if(order.status === "CANCELLED" || "COMPLETED"){
        res.status(400).json({ message: "Order Processed, can't modify" });
      } 
      else{
        const kit = await getKitInfoByIdService(kitId as string);
        if(kit.status === 'SPECIMEN_PROCESSING' || 'SPECIMEN_PROCESS_COMPLETE'){
          res.status(400).json({ message: "Kit Processed, can't modify" });
        }
        else{
          res.status(200).json(order);
        }
       
      } 
        
      } catch (error) {
        res.status(404).json({ message: 'Order not found' });
      }
  }
   
    
    
  
}
