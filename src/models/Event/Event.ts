import { EventType } from "./EventType";

export interface Event {
    id: string;
    created: string;
    eventType: {
      type:EventType
    };
    payload: object;
  }
  