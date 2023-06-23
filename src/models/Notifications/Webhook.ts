import { EventType } from "../Event/EventType";

export interface Webhook {
    url: string;
    status: 'ACTIVE' | 'INACTIVE';
    eventTypes: EventType[];
    id: string;
  }
  