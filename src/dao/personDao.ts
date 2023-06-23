import AWS from 'aws-sdk';

import { Person } from '../models/Person/Person';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function getPersonInfoById(personId: string, partnerUserId?: string): Promise<Person>{
  let params: AWS.DynamoDB.DocumentClient.GetItemInput;

  if (partnerUserId) {
    params = {
      TableName: 'Person-sandbox',
      Key: {
        partnerUserId: partnerUserId,
      },
    };
  } else {
    params = {
      TableName: 'Person-sandbox',
      Key: {
        personId: personId,
      },
    };
  }
    return await dynamoDb.get(params).promise()
      .then((data) => {
        
          return data.Item as Person; 
       
      });
  }

  

  export async function updatePersonInfoById(personId: string, updatedPersonInfo: Person): Promise<Person> {
    const params = {
      TableName: 'Person-sandbox',
      Key: {
        personId: personId,
      },
     
      UpdateExpression: `
      SET #firstName = :firstName,
          #lastName = :lastName,
          #email = :email,
          #mobile = :mobile,
          #phone = :phone,
          #sexAtBirth = :sexAtBirth,
          #dateOfBirth = :dateOfBirth,
          #partnerUserId = :partnerUserId,
          #title = :title,
          #metadata = :metadata,
          #lastUpdated = :lastUpdated,
          #genitals = :genitals,
          #pronoun = :pronoun
    `,
    ExpressionAttributeNames: {
     
      '#firstName': 'firstName',
      '#lastName': 'lastName',
      '#email': 'email',
      '#mobile': 'mobile',
      '#phone': 'phone',
      '#sexAtBirth': 'sexAtBirth',
      '#dateOfBirth': 'dateOfBirth',
      '#partnerUserId': 'partnerUserId',
      '#title': 'title',
      '#metadata': 'metadata',
      '#lastUpdated': 'lastUpdated',
      '#genitals': 'genitals',
      '#pronoun': 'pronoun'
    },
    ExpressionAttributeValues: {
      
      ':firstName': updatedPersonInfo.firstName,
      ':lastName': updatedPersonInfo.lastName,
      ':email': updatedPersonInfo.email,
      ':mobile': updatedPersonInfo.mobile,
      ':phone': updatedPersonInfo.phone || null,
      ':sexAtBirth': updatedPersonInfo.sexAtBirth,
      ':dateOfBirth': updatedPersonInfo.dateOfBirth,
      ':partnerUserId': updatedPersonInfo.partnerUserId || null,
      ':title': updatedPersonInfo.title || null,
      ':metadata': updatedPersonInfo.metadata,
      ':lastUpdated': new Date().toISOString(),
      ':genitals': updatedPersonInfo.genitals,
      ':pronoun': updatedPersonInfo.pronoun || null,
    },
      
      ReturnValues: 'ALL_NEW',
    };
  
    return await dynamoDb.update(params).promise()
      .then((data) => {
        return data.Attributes as Person; 
      });
  }


  export async function createPerson(person: Person):Promise<Person>{
    const params = {
      TableName: 'Person-sandbox',
      Item: person,
    };
  
    return await dynamoDb.put(params).promise().then(() => person as Person) ;
  }