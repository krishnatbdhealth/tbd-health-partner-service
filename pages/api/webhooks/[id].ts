// pages/api/orders/[orderId].ts

import { getAllWebhooksService, updateWebhookByIdService } from '@/src/service/webhooksService';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function orderHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const { WebhookId } = query;
        if(req.method === "PATCH"){
      try {
        const updatedWebhookData = req.body;
       const updatedWebhook = await updateWebhookByIdService(WebhookId as string, updatedWebhookData);
        res.status(200).json(updatedWebhook);
      } catch (error) {
        res.status(400).json({ message: 'Invalid request' });
      } }

}
