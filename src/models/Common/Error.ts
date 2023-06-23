export interface ErrorDetail {
    code: number;
    message: string;
    errorDetail: any[];
  }
  
  export interface ErrorResponse {
    errors: ErrorDetail[];
  }
  