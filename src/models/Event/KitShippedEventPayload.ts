import { Metadata } from "../Common/Metadata";

export interface Order {
    orderId: string;
    kitId: string;
    inboundTracking: string;
    outboundTracking: string;
    shippedDatetime: string;
    metadata: Metadata[];
    inboundCarrier: string;
    outboundCarrier: string;
  }
  

  