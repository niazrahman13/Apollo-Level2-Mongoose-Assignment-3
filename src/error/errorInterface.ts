interface ErrorResponse {
    success: false;
    message: string;
    errorMessage: string;
    errorDetails: Record<string, any>;
    stack?: string;
  }

export {ErrorResponse}