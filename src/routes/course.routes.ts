import express from 'express';
import { createCourse, getBestCourse} from '../modules/course/courseController';
import validateRequest from '../middleware/validateRequests';
import { courseZodValidation } from '../modules/course/courseZodValidation';


const CourseRouter = express.Router()

CourseRouter.post('/',validateRequest(courseZodValidation),createCourse)

CourseRouter.get('/best',getBestCourse)

export {CourseRouter}

