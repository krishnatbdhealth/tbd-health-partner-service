import { Event } from '@/src/models/Event/Event';
import { getNotificationsBykitIdService } from '@/src/service/notificationsService';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const  id = req.query.id as string;

  if (req.method === 'GET') {
    try {
      const response = await getNotificationsBykitIdService(id);
      const event : Event = {
        id: response.id,
    created: response.id,
    eventType:{
      type:response.eventType,
    } ,
    payload: {},
      }
      res.status(200).json(event);
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: 'id not found' });
    }
  }
}

export default handler;
