import AWS from 'aws-sdk';
import { Webhook } from '../models/Notifications/Webhook';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function getAllWebhooks(): Promise<Webhook[]> {
    const params = {
      TableName: 'webhook',
    };
  
    return await dynamoDb.scan(params).promise()
      .then((data) => {
      
          return data.Items as Webhook[]; 
       
      });
  }

  

  export async function updatedWebhookDatabyId(WebhookId: string, updatedWebhookData:Webhook): Promise<Webhook> {
    const params = {
      TableName: 'webhook',
      Key: {
        id: WebhookId,
      },
     
      UpdateExpression: 'SET #url = :url, #status = :status, #eventTypes = :eventTypes',
      ExpressionAttributeNames: {
        '#url': 'url',
        '#status': 'status',
        '#eventTypes': 'eventTypes',
      },
      ExpressionAttributeValues: {
        ':url': updatedWebhookData.url,
        ':status': updatedWebhookData.status,
        ':eventTypes': updatedWebhookData.eventTypes,
      },
      
      ReturnValues: 'ALL_NEW',
    };
  
    return await dynamoDb.update(params).promise()
      .then((data) => {
        return data.Attributes as Webhook; 
      });
  }