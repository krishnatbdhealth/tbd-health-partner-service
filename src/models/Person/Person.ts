import { Metadata } from "../Common/Metadata";

export interface Person {
    personId: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    phone?: string;
    sexAtBirth: 'MALE' | 'FEMALE';
    dateOfBirth: string;
    partnerUserId?: string;
    title?: string;
    metadata: Metadata;
    created: string;
    lastUpdated: string;
    genitals: 'PENIS' | 'VAGINA' | 'INTERSEX';
    pronoun?: 'She/Her' | 'He/Him' | 'They/Them';
  }
  
 