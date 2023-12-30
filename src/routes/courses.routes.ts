import express from 'express';
import { getCourse, getCourseByIdWithReviews, updateCourseById } from '../modules/course/courseController';
import validateRequest from '../middleware/validateRequests';
import { courseZodValidation } from '../modules/course/courseZodValidation';


const coursesRouter = express.Router()


coursesRouter.get('/',getCourse)

coursesRouter.put('/:courseId',validateRequest(courseZodValidation),updateCourseById)

coursesRouter.get('/:courseId/reviews',getCourseByIdWithReviews)


export {coursesRouter}