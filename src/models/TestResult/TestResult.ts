import { Test } from "./Test";

export interface TestResult {
    id: string;
    kitId: string;
    specimenTakenDate: string;
    specimenReceivedDate: string;
    specimenProcessedDate: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETE';
    summaryInterpretation: 'POSITIVE' | 'NEGATIVE' | 'INCONCLUSIVE';
    orderId: string;
    createdAt: string;
    personId: string;
    tests: Test[];
    lastUpdatedAt: string;
  }
  
