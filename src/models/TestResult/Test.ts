export interface Test {
    id: string;
    result: string;
    name: string;
    interpretation: 'POSTIVE' | 'NEGATIVE' | 'INCONCLUSIVE';
    processingStatus: 'PENDING' | 'COMPLETE';
  }
  