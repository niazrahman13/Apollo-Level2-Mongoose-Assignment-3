import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { ErrorResponse } from './errorInterface';

const globalErrorHandler = (
  error: Error | mongoose.Error.CastError, req: Request, res: Response, next: NextFunction): void => {
  let errorResponse: ErrorResponse;

  if (error instanceof mongoose.Error.CastError) {
    const castError = error as mongoose.Error.CastError;
    errorResponse = {
      success: false,
      message: 'Invalid ID',
      errorMessage: `${castError.value} is not a valid ID!`,
      errorDetails: {
        stringValue: castError.value,
        valueType: typeof castError.value,
        kind: castError.kind,
        value: castError.value,
        path: castError.path,
        reason: castError.reason,
        name: castError.name,
        message: castError.message,
      },
      stack: castError.stack || '',
    };
  } else {
    errorResponse = {
      success: false,
      message: 'Internal Server Error',
      errorMessage: error.message,
      errorDetails: {
        name: error.name,
        message: error.message,
      },
      stack: error.stack || '',
    };
  }

  res.status(500).json(errorResponse);
};


export {globalErrorHandler}