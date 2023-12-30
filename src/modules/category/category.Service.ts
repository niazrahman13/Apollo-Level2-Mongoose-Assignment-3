//create Category

import { ICategory } from "./categoryInterface"
import { CategoryModel } from "./categoryModel"

//

const createCatServices = async(data : ICategory)=>{
    const result = await CategoryModel.create(data)

    return result
}

// get categories

const getCatServices = async()=>{
    const result = await CategoryModel.find()

    return result
}

export {createCatServices, getCatServices}