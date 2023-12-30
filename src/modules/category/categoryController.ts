import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createCatServices, getCatServices } from "./category.Service";

// create Category

const createCategory = catchAsync(async(req: Request, res: Response)=>{

    const body = req.body

    const result = await createCatServices(body)
    
    res.status(201).json({
        
            "success": true,
            "statusCode": 201,
            "message": "Category created successfully",
            "data": result
        
    })
})

// get Category

const getCategory = catchAsync(async(req: Request, res: Response)=>{


    const result = await getCatServices()
    
    res.status(200).json({
        
            "success": true,
            "statusCode": 200,
            "message": "Category retrieved successfully",
            "data": result
        
    })
})

export {createCategory, getCategory}