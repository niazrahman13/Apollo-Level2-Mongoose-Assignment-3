import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createReviewServices, getReviewServices } from "./review.service";

// create Category

const createReview = catchAsync(async(req: Request, res: Response)=>{

    const body = req.body

    const result = await createReviewServices(body)
    
    res.status(201).json({
        
            "success": true,
            "statusCode": 201,
            "message": "Review created successfully",
            "data": result
        
    })
})

// get Category

const getReview = catchAsync(async(req: Request, res: Response)=>{


    const result = await getReviewServices()
    
    res.status(200).json({
        
            "success": true,
            "statusCode": 200,
            "message": "Review retrieved successfully",
            "data": result
        
    })
})

export {createReview, getReview}