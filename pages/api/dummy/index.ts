import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Handle the API request here
  res.status(200).json({ message: 'Hello, API!' });
};

export default handler;