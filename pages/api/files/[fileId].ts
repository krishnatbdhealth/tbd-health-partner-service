import { getFilesbyIdService } from '@/src/service/documentFileService';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fileId = req.query.fileId as string;

  if (req.method === 'GET') {
    try {
      const file = await getFilesbyIdService(fileId);
      res.status(200).json(file);
    } catch (error) {
      res.status(404).json({ message: 'Order not found' });
    }
  }
}

export default handler;
