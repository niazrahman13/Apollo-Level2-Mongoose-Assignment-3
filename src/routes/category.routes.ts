import express from 'express';
import { createCategory, getCategory } from '../modules/category/categoryController';
import validateRequest from '../middleware/validateRequests';
import { categoryZodSchema } from '../modules/category/categoryValidation';


const CatRouter = express.Router()

CatRouter.post('/',validateRequest(categoryZodSchema),createCategory)

CatRouter.get('/',getCategory)

export {CatRouter}

