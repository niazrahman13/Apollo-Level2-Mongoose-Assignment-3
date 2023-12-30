import { Schema, model } from 'mongoose';
import { ICategory } from './categoryInterface';

// Category Schema
const categorySchema = new Schema<ICategory>({

  name: { 
    type: String, 
    required: true,
    unique: true
}
},
{versionKey : false});

// Category model

const CategoryModel = model<ICategory>('categorymodel', categorySchema);

export  {CategoryModel};
