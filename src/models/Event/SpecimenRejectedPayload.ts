export interface SpecimenRejectedPayload {
    orderId: string;
    kitId: string;
    rejectedDatetime: string;
    rejectedReason: string;
    isRecoverable: boolean;
    requiredAction: string;
  }
  