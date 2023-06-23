import { getKitInfoByIdService } from '@/src/service/kitsService';
import { addPersonToKitService, getOrderByIdService } from '@/src/service/orderService';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { kitId } = req.query;
  let orderId;
  try {
    if (req.method === 'POST') {
      console.log(kitId)
      const kit = await getKitInfoByIdService(kitId as string);
      orderId = kit.orderId;
      console.log(orderId);
      const order = await getOrderByIdService(orderId as string);
      console.log(order.status);
      if(order.status === "CANCELLED" || order.status === "COMPLETED"){
        res.status(400).json({ message: "Order Processed, can't modify" });
      } 
      else{
        if(kit.status === 'SPECIMEN_PROCESSING' || kit.status === 'SPECIMEN_PROCESS_COMPLETE'){
          res.status(400).json({ message: "Kit Processed, can't modify" });
        }
        else{
         
          const { personId } = req.body;
          console.log(personId);
          const updatedkit = await addPersonToKitService(kitId as string, personId as string);
          res.status(200).json(updatedkit);
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
