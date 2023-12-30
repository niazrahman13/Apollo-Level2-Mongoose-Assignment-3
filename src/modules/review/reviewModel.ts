import mongoose, { Schema } from 'mongoose';
import { IReview } from './reviewInterface';

// Review Schema
const reviewSchema = new Schema<IReview>({
courseId: { 
    type: Schema.Types.ObjectId, 
    required: true,
    ref:"coursemodels"
},
rating: { 
    type: Number, 
    required: true 
},
review: { 
    type: String, 
    required: true }
},{
    versionKey: false
});

reviewSchema.set('toJSON', {
    transform: function (doc, ret) {
      // Reorder the fields as needed
      return {
        _id: ret._id,
        courseId: ret.courseId,
        rating: ret.rating,
        review: ret.review,
      };
    },
  });

// Review Model

const ReviewModel = mongoose.model<IReview>('reviewmodel', reviewSchema);

export default ReviewModel;
