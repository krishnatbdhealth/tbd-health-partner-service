export interface Kit {
    id: string;
    orderId: string;
    status: 'SHIPPED' | 'SPECIMEN_IN_TRANSIT' | 'SPECIMEN_RECEIVED' | 'SPECIMEN_ACCEPTED' | 'SPECIMEN_REJECTED' | 'SPECIMEN_PROCESSING' | 'SPECIMEN_PROCESS_COMPLETE';
    createdDatetime: string;
    lastUpdatedDatetime: string;
    personId: string;
    partnerPersonId: string;
  }
  