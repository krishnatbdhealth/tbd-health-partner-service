import AWS from 'aws-sdk';
import { TestResult } from '../models/TestResult/TestResult';
import { Encounter } from '../models/Encounter';
import { Prescription } from '../models/Prescription/Prescription';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

  export async function getTestresultBykitId(kitId: string): Promise<any> {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        kitId: kitId,
        
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item );
  }
  
  export async function getTestresultByOrderId(orderId: string): Promise<any> {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        orderId: orderId,
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item );
  }
  
  export async function getPrescriptionBytestResultId(testResultId: string): Promise<Prescription>  {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        testResultId: testResultId,
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item as Prescription);
  }

  export async function getEncounterbytestResultId(testResultId: string): Promise<Encounter> {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        testResultId: testResultId,
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item as Encounter );
  }

  export async function  getTestResultDetail(testResultId: string): Promise<TestResult> {
    const params = {
      TableName: 'TestResults-sandbox',
      Key: {
        testResultId: testResultId,
      },
    };
  
    return await dynamoDb.get(params).promise().then((result) => result.Item as TestResult );
  }
 