import { Schema, Types } from "mongoose";

interface IReview {
    
    courseId:Types.ObjectId;
    rating: number;
    review: string;
}

export {IReview}