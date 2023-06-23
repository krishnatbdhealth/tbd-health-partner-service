import { getKitInfoById } from "../dao/kitsDao";
import { Kit } from "../models/Kit/Kit";

export async function getKitInfoByIdService(kitId: string) {
  console.log(kitId);
  const kit = await getKitInfoById(kitId);
  const populatedKit: Kit = {
    id: kit.kitId,
    orderId: kit.orderId|| "Not available in response", // Not available in response
    status: kit.kitStatus,
    createdDatetime: kit.created,
    lastUpdatedDatetime: kit.lastUpdatedDateTime,
    personId: kit.patientId,
    partnerPersonId: kit.partnerPersonId || "Not available in response",// Not available in response
  };
  return populatedKit;
  }