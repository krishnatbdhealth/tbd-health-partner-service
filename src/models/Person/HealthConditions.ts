import { Medication } from "./Medication";

export interface HealthConditions {
  onGoingConditions: OnGoingCondition[];
  allergyIntolerance: string;
  medications: Medication[];
}

export interface OnGoingCondition {
  name: string;
  status: 'RESOLVED' | 'ON-GOING';
  onsetDate: string; // Format: YYYY-MM-DD
  resolvedDate: string | null; // Format: YYYY-MM-DD or null
  description: string;
}

