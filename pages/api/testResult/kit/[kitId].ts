import { Test } from '@/src/models/TestResult/Test';
import { TestResult } from '@/src/models/TestResult/TestResult';
import { getTestresultBykitIdService } from '@/src/service/testResultService';
import { NextApiRequest, NextApiResponse } from 'next';


async function handler(req: NextApiRequest, res:  NextApiResponse) {
  const  kitId = req.query.kitId as string;

  if (req.method === 'GET') {
    try {
      // console.log(kitId)
      const testResult = await getTestresultBykitIdService(kitId);
      console.log(testResult);
      res.status(200).json(testResult);
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: 'testResult not found' });
    }
  }
}

export default handler;
