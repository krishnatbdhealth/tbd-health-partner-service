// pages/api/orders/[orderId].ts

import { Person } from '@/src/models/Person/Person';
import { getPersonInfoByIdService, updatePersonInfoByIdService } from '@/src/service/personService';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function orderHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const { personId } = query;
  const partnerUserId = req.query.partnerUserId as string


  switch (method) {
    case 'GET':
      try {
        const Person = await getPersonInfoByIdService(personId as string,partnerUserId as string);
        res.status(200).json(Person);
      } catch (error) {
        res.status(404).json({ message: 'Person not found' });
      }
      break;

    case 'PATCH':
      try {
        const updatedpersonInfo = req.body;
        // Validate and sanitize the updated order data if necessary
          console.log(updatedpersonInfo)
        const updatedPerson = await updatePersonInfoByIdService(personId as string, updatedpersonInfo as Person);
        res.status(200).json(updatedPerson);
      } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Invalid request' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
