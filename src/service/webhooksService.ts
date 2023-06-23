import { getAllWebhooks, updatedWebhookDatabyId } from "../dao/webhooksDao";
import { Webhook } from "../models/Notifications/Webhook";

export function getAllWebhooksService(): Promise<any[]> {
  
    return getAllWebhooks();
  }

  
  export function updateWebhookByIdService(WebhookId: string, updatedWebhookData: Webhook) {
  
    return updatedWebhookDatabyId(WebhookId, updatedWebhookData);
  }