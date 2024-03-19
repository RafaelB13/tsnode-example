import { Response } from 'express';

// Function to send an error response
export const sendErrorResponse = (res: Response, statusCode: number, message: string): void => {
  res.status(statusCode).json({ error: message });
};

// Function to send a success response
export const sendSuccessResponse = (res: Response, statusCode: number, data: any): void => {
  res.status(statusCode).json({ data });
};

// Function to handle internal server errors
export const handleServerError = (res: Response, error: Error): void => {
  console.error(error);
  sendErrorResponse(res, 500, 'Internal Server Error');
};

// Function to handle not found errors
export const handleNotFoundError = (res: Response, message: string): void => {
  sendErrorResponse(res, 404, message);
};

// Function to handle bad request errors
export const handleBadRequestError = (res: Response, message: string): void => {
  sendErrorResponse(res, 400, message);
};