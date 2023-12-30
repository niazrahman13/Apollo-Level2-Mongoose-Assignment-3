import { Schema, Types } from "mongoose";

interface Tag {
    name: string;
    isDeleted: boolean;
}
  
interface CourseDetails {
    level: string;
    description: string;
}

interface ICourse {
    title: string;
    instructor: string;
    categoryId: Types.ObjectId;
    price: number;
    tags: {
    name: string;
    isDeleted: boolean;
  };
    startDate: string;
    endDate: string;
    language: string;
    provider: string;
    durationInWeeks: number;
    details: CourseDetails;
    reviews?: Schema.Types.ObjectId
}
  
export {ICourse}