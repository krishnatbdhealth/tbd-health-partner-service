import { Address } from "../Common/Address";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    speciality: string;
    email: string;
    phone: string;
    address: Address;
    organization: string;
  }
  
 
  