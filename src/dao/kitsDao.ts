import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function getKitInfoById(kitId: string): Promise<any> {
    const params = {
        TableName: 'Kit-sandbox',
        Key: {
            kitId: kitId,
        },
      };
    return await dynamoDb.get(params).promise()
      .then((data) => {
        
          return data.Item as any; 
        
      });
  }

  
