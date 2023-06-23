import { Medication } from "../Person/Medication";

export interface Prescription {    
    administrationRoute: string;
    id: string;
    provider: string;
    datetime: string;
    startDate: string;
    endDate: string;
    instructions: string;
    isElectronic: boolean;
    drugs: Medication[];
  }
  
 
  