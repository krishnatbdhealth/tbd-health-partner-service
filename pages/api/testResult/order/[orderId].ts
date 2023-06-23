import { getOrderByIdService } from '@/src/service/orderService';
import { getTestresultBykitIdService } from '@/src/service/testResultService';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res:  NextApiResponse) {
  const orderId = req.query.orderId as string;

  if (req.method === 'GET') {
    try {
      const order = await getOrderByIdService(orderId as string);
      const {kitId} = order;
      const testResult = await getTestresultBykitIdService(kitId as string);
      res.status(200).json(testResult);
    } catch (error) {
      res.status(404).json({ message: 'testResult not found' });
    }
  }
}

export default handler;
