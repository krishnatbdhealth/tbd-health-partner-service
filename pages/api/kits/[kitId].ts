import { Kit } from '@/src/models/Kit/Kit';
import { getKitInfoByIdService } from '@/src/service/kitsService';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function orderHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const { kitId } = query;

if(method === "GET"){
  
      try {
        const kit = await getKitInfoByIdService(kitId as string);
        res.status(200).json(kit);
      } catch (error) {
        res.status(404).json({ message: 'Order not found' });
      }
    }
    else{
      res.status(405).json({ message: 'Method Not Allowed' });    
  }
}
