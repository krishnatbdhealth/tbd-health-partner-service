export interface Problem {
    name: string;
    status: 'Resolved' | 'Active';
    onsetDate: string;
    resolvedDate: string | null;
    description: string;
  }
  