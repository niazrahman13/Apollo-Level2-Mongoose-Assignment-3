import { IReview } from "./reviewInterface"
import ReviewModel from "./reviewModel"

const createReviewServices = async(data : IReview)=>{
    const result = await ReviewModel.create(data)

    return result
}

// get categories

const getReviewServices = async()=>{
    const result = await ReviewModel.find()

    return result
}

export {createReviewServices, getReviewServices}