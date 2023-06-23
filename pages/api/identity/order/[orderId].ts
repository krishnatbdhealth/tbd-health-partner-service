import { getKitInfoByIdService } from '@/src/service/kitsService';
import { addRecipientToOrderService, getOrderByIdService } from '@/src/service/orderService';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { orderId } = req.query;
  let kitId;
  try {
    if (req.method === 'POST') {
      // Add recipient to order

      const order = await getOrderByIdService(orderId as string);
      kitId = order.kitId ;
      console.log(order.status);
      if(order.status === "CANCELLED" || order.status === "COMPLETED"){
        res.status(400).json({ message: "Order Processed, can't modify" });
      } 
      else{

        const kit = await getKitInfoByIdService(kitId as string);
        if(kit.status === 'SPECIMEN_PROCESSING' || kit.status === 'SPECIMEN_PROCESS_COMPLETE'){
          res.status(400).json({ message: "Kit Processed, can't modify" });
        }
        else{
        
          const { id } = req.body;
          const updatedOrder = await addRecipientToOrderService(orderId as string, id as string);
          res.status(200).json(updatedOrder);
        }
      }

     
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error processing API request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
