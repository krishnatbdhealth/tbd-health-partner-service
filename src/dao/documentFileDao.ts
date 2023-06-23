import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

 
export async function getAllFilesKit(kitId: string) {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        kitId: kitId,
      },
    };
  
    return await dynamoDb.get(params).promise()
      .then((data) => {
        if (data.Item) {
          return data.Item; 
        } else {
          return []; 
        }
      });
  }

  export async function getFileById(fileId: string) {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        fileId: fileId,
       
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item );
  }
  