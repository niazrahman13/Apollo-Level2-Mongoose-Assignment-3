import express from 'express';
import { createReview, getReview } from '../modules/review/reviewsController';
import validateRequest from '../middleware/validateRequests';
import { reviewZodSchema } from '../modules/review/reviewValidation';


const ReviewRoute = express.Router()

ReviewRoute.post('/',validateRequest(reviewZodSchema),createReview)

ReviewRoute.get('/',getReview)

export {ReviewRoute}

