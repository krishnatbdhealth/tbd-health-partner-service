import { getTestresultBykitId } from '@/src/dao/testresultDao';
import { Result } from '@/src/models/Document/Files';
import { getFileskitService } from '@/src/service/documentFileService';
import { getTestresultBykitIdService } from '@/src/service/testResultService';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const kitId = req.query.kitId as string;
  const {fileType}  = req.query;
  console.log(fileType);
  if (req.method === 'GET') {
    try {
      
      const response = await getTestresultBykitIdService(kitId as string);
     
      const file: Result = {
        id: "", // not available
    type: 'RESULT',
    format: fileType as string, 
    status: 'SUCCESS',
    createdAt: response.createdAt,
    lastUpdatedAt: response.lastUpdatedAt,
    preSignedDownloadUrl: response.attachments,
    preSignedUrlExpiresAt: "", // not available
      }
      res.status(200).json(file);
    } catch (error) {
      res.status(404).json({ message: 'Order not found' });
    }
  }
}

export default handler;
