import mongoose from "mongoose"
import { ICourse } from "./courseInterface"
import { CourseModel } from "./courseModel"
import ReviewModel from "../review/reviewModel"

// create Course

const createCourseServices = async(data : ICourse)=>{
    const result = await CourseModel.create(data)

    return result
}

// get categories

const getCourseServices = async()=>{
    const result = await CourseModel.find()

    return result
}

// get categories

const getCourseByIdServices = async(courseId: any)=>{
  
  const result = await CourseModel.findById(courseId);

  const reviews = await ReviewModel.find({courseId}).select({ _id: 0 })
  return({result,reviews})
}

// get categories

const getBestCourseServices = async()=>{

  
  const result = await ReviewModel.aggregate([
    {
      $group: {
        _id: '$courseId',
        averageRating: { $avg: '$rating' },
        reviewCount: { $sum: 1 },
      },
    },
    {
      $sort: { averageRating: -1 },
    },
    {
      $limit: 1,
    },
  ]);

  const courseId = result[0]._id;
  const course = await CourseModel.findById(courseId);
  const averageRating = result[0].averageRating
  const reviewCount = result[0].reviewCount
  return({course, averageRating,reviewCount})
}



// get categories

const updateCourseServices = async(id: any,data: any)=>{
  const result = await CourseModel.findOneAndUpdate(
    { _id: id },
    { $set: data },
    { new: true } 
  );

    return result
}

export {createCourseServices, getCourseServices, getCourseByIdServices, getBestCourseServices, updateCourseServices}