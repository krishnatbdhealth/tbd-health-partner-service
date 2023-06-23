import { Metadata } from "../Common/Metadata";

export interface SpecimenReceivedPayload {
    orderId: string;
    kitId: string;
    receivedDatetime: string;
    eventDatetime: string;
    metadata: Metadata[];
  }
  
 