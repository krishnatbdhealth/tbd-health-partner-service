
import { NextApiRequest, NextApiResponse } from 'next';
import { createPersonService } from '@/src/service/personService';
import { Person } from '@/src/models/Person/Person';


export default async function handleOrderRequest(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const person : Person = req.body;
    console.log(person)
    // Validate the request payload
    // if (!validateOrderPayload(payload)) {
    //   res.status(400).json({ error: 'Invalid order payload' });
    //   return;
    // }

    // const person: Person = {
    //     id: payload.id,
    //     firstName: payload.firstName,
    //     lastName: 'Doe',
    //     email: 'john.doe@example.com',
    //     mobile: '1234567890',
    //     sexAtBirth: 'MALE',
    //     dateOfBirth: '1990-01-01',
    //     metadata: [],
    //     created: '2023-06-08T00:00:00Z',
    //     lastUpdated: '2023-06-08T00:00:00Z',
    //     genitals: 'PENIS',
    //     recipient: {
    //       id: 'recipient-id',
    //     },
    //     shipping: {
    //       id: 'shipping-id',
    //       name: 'Shipping Name',
    //       minTime: 1,
    //       maxTime: 5,
    //       timeUnit: 'days',
    //     },
    //     products: {
    //       id: 'product-id',
    //       variantId: 'variant-id',
    //       name: 'Product Name',
    //       qty: 1,
    //       type: 'AT_HOME_TEST_KIT',
    //     },
    //     shippingAddress: {
    //       street1: '123 Street',
    //       street2: 'Apt 4',
    //       city: 'City',
    //       state: 'State',
    //       zip: '12345',
    //       country: 'Country',
    //     },
    //     status: 'PENDING',
    //     kitId: 'kit-id',
    //     parentOrderId: 'parent-order-id',
    //     preferBulkShipping: false,
    //   };
    

    try {
     
      const createPerson = await createPersonService(person);
      console.log("Person Added");
      res.status(201).json(createPerson);
    } catch (error) {
      console.error('Error creating Person:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

