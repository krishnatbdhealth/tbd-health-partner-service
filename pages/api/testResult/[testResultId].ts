import { getTestResultDetailService } from '@/src/service/testResultService';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const testResultId  = req.query.testResultId as string;

  if (req.method === 'GET') {
    try {
      const testResult = await getTestResultDetailService(testResultId);
      res.status(200).json(testResult);
    } catch (error) {
      res.status(404).json({ message: 'testResult not found' });
    }
  }
}

export default handler;
