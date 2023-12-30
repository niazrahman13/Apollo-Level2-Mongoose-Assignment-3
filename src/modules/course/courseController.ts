import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createCourseServices, getBestCourseServices, getCourseByIdServices, getCourseServices, updateCourseServices } from "./course.service";
import { CourseModel } from "./courseModel";
import { customQuery } from "../../utils/customQueryBuilder";

// create Course

const createCourse = catchAsync(async(req: Request, res: Response)=>{

    const body = req.body

    const result = await createCourseServices(body)
    
    res.status(201).json({
        success: true,
      statusCode: 201,
      message: "Course created successfully",
      data:result
    })
})

// get Course

const getCourse = catchAsync(async (req: Request, res: Response) => {
    
  const query = req.query
  
  let result = customQuery(query)
  
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Courses retrieved successfully',
        meta: {
          page: parseInt((await result).page, 10),
          limit: parseInt((await result).limit, 10),
          total: (await result).total,
        },
        data: (await result).courses,
      });
    
  });
  
// get Course by Id

const getCourseByIdWithReviews = catchAsync(async(req: Request, res: Response)=>{

    const courseId = req.params.courseId

    const result = await getCourseByIdServices(courseId)
    
    res.status(200).json({
        
            "success": true,
            "statusCode": 200,
            "message": "Course and Reviews retrieved successfully",
            "data": result
        
    })
})

// update Course by Id

const updateCourseById = catchAsync(async(req: Request, res: Response)=>{

    const id = req.params.courseId
    const body = req.body

    const result = await updateCourseServices(id,body)
    
    res.status(200).json({
        
            "success": true,
            "statusCode": 200,
            "message": "Course updated successfully",
            "data": result
        
    })
})

// get Best Course

const getBestCourse = catchAsync(async(req: Request, res: Response)=>{


    const result = await getBestCourseServices()
    console.log(result)
    res.status(200).json({
        
            "success": true,
            "statusCode": 200,
            "message": "Best Course retrieved successfully",
            "data": result
        
    })
})

export {createCourse, getCourse,updateCourseById ,getCourseByIdWithReviews, getBestCourse}