import { getEncounterbytestResultId, getTestResultDetail, getTestresultByOrderId, getTestresultBykitId } from "../dao/testresultDao";
import { Test } from "../models/TestResult/Test";
import { TestResult } from "../models/TestResult/TestResult";

export async function getTestresultBykitIdService(kitId: string) {
    let testResult =await getTestresultBykitId(kitId);
    // console.log(testResult);


    const result: TestResult = {
        id: testResult.id || "not available in response",// not available in response
        kitId: testResult.kitId,
        specimenTakenDate: testResult.specimenTakenDate || 'not available in response', //  not available in response
        specimenReceivedDate: testResult.specimenReceivedDate || ' not available in response', //  not available in response
        specimenProcessedDate: testResult.specimenProcessedDate || 'not available in response', //  not available in response
        status: testResult.testResultStatus as 'PENDING' | 'IN_PROGRESS' | 'COMPLETE',
        summaryInterpretation: testResult.summaryStatus || 'POSITIVE',
        orderId: testResult.orderId || 'not available in response',// not available in response
        createdAt: testResult.reportCreateDateTime,
        personId: testResult.patientId,
        tests: testResult.results.map((result: any) => {
            const test: Test = {
                id: result.testId,
                name: result.testName,
                result: result.result,
                interpretation: result.interpretation || 'POSITIVE',
                processingStatus: result.processingStatus || 'PENDING',
            };
            return test;
        }),
        lastUpdatedAt: testResult.reportLastModifiedDateTime,
    };
    return result;
    // return getTestresultBykitId(kitId);
}



export function getPrescriptionbyIdService(testResultId: string) {
    return getTestresultByOrderId(testResultId);
}

export function getEncounterbytestResultIdService(testResultId: string) {
    return getEncounterbytestResultId(testResultId);
}

export function getTestResultDetailService(testResultId: string) {
    return getTestResultDetail(testResultId);
}