import { createPerson, getPersonInfoById, updatePersonInfoById } from "../dao/personDao";
import { Person } from "../models/Person/Person";

export async function getPersonInfoByIdService(personId: string, partnerUserId?: string) {
  
  let personInfo;
    
  if (partnerUserId) {
    personInfo = await getPersonInfoById(personId, partnerUserId);
  } else {
    personInfo = await getPersonInfoById(personId);
  }

  return personInfo;
  }


  
  export function updatePersonInfoByIdService(personId: string, updatedPersonInfo: Person) {
  
    return updatePersonInfoById(personId, updatedPersonInfo);
  }

  export function createPersonService(person : Person) {
  
    return createPerson(person);
  }
