import { getAllWebhooksService, updateWebhookByIdService } from '@/src/service/webhooksService';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function orderHandler(req: NextApiRequest, res: NextApiResponse) {
  // const { method, query } = req;

if(req.method === 'GET'){
  try {
    const webhooks = await getAllWebhooksService();
    res.status(200).json(webhooks);
  } catch (error) {
    res.status(404).json({ message: 'webhooks not found' });
  }
}  
}
