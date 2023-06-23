export interface Result {
    id: string;
    type: 'RESULT';
    format: string;
    status: 'SUCCESS';
    createdAt: string;
    lastUpdatedAt: string;
    preSignedDownloadUrl: string;
    preSignedUrlExpiresAt: string;
  }
  