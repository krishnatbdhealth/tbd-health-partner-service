import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

  export async function getNotificationsBykitId(kitId: string): Promise<any> {
    const params = {
      TableName: 'Event-sandbox',
      Key: {
        id: kitId,
        
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item);
  }
  