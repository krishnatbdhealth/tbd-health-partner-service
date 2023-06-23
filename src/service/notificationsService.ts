import { getNotificationsBykitId } from "../dao/notificationsDao";

export function getNotificationsBykitIdService(id: string) {
    return getNotificationsBykitId(id);
}