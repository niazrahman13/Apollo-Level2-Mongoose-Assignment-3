import { Schema, model } from "mongoose";
import { ICourse } from "./courseInterface";

// Tag Schema
const tagSchema = new Schema({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, required: true }
});

// CourseDetails Schema
const courseDetailsSchema = new Schema({
  level: { type: String, required: true },
  description: { type: String, required: true }
});

// Define Course Schema
const courseSchema = new Schema<ICourse>({
  title: { 
    type: String, 
    required: true 
},
  instructor: { 
    type: String, 
    required: true 
},
  categoryId: { 
    type: Schema.Types.ObjectId, 
    required: true,
    ref: "categorymodels"
},
  price: { 
    type: Number, 
    required: true 
},
  tags: [{ 
    type: tagSchema, 
    required: true 
}],
  startDate: { 
    type: String, 
    required: true 
},
  endDate: { 
    type: String, 
    required: true 
},
  language: { 
    type: String, 
    required: true 
},
  provider: { 
    type: String, 
    required: true 
},
  durationInWeeks: { 
    type: Number
},
  details: { 
    type: courseDetailsSchema, 
    required: true 
},
},
{
  versionKey: false
});

// Function to calculate duration in days
function calculateDurationInDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const millisecondsInDay = 7 * 24 * 60 * 60 * 1000;
  const durationInMilliseconds = end.getTime() - start.getTime();
  const durationInDays = Math.ceil(durationInMilliseconds / millisecondsInDay);
  return durationInDays;
}

// Pre save middleware 

courseSchema.pre('save',async function(next){
  const user = this

  user.durationInWeeks = calculateDurationInDays(this.startDate, this.endDate);

  
  next()
})

// Mongoose toJSON transformation
// Custom toJSON transformation
courseSchema.set('toJSON', {
  transform: function (doc, ret) {
    const { _id, details, tags, durationInWeeks, ...rest } = ret;

    // Exclude _id from details
    const cleanedDetails = {
      ...details,
      _id: undefined
    };

    // Exclude _id from each tag
    const cleanedTags = tags.map((tag:any) => {
      const { _id, ...cleanedTag } = tag;
      return cleanedTag;
    });

    return {
    
      
        _id,
        title: rest.title,
        instructor: rest.instructor,
        categoryId: rest.categoryId,
        price: rest.price,
        tags: cleanedTags,
        startDate: rest.startDate,
        endDate: rest.endDate,
        language: rest.language,
        provider: rest.provider,
        durationInWeeks,
        details: cleanedDetails
      
    };
  }
});

// Create Course model
const CourseModel = model<ICourse>('coursemodel', courseSchema);

export {CourseModel}