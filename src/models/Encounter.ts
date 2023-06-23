import { Address } from "./Common/Address";
import { Person } from "./Person/Person";

export interface Encounter {
    id: string;
    type: 'TELEMED' | 'IN-PERSON' | 'PHONE-CALL';
    appntDatetimeStart: string;
    actualDatetimeStart: string;
    startTime: string;
    endTime: string;
    chiefComplaint: string;
    plannedDurationMins: string;
    actualDurationMins: string;
    assessment: string;
    carePlan: string;
    status: 'PENDING' | 'IN-PROGRESS' | 'CANCELLED' | 'COMPLETED';
    person: Person;
    provider: {
      id: string;
      firstName: string;
      lastName: string;
      speciality: string;
      email: string;
      phone: string;
      address: Address;
    };
    testResultId?: string;
    prescriptionId?: string;
  }
  