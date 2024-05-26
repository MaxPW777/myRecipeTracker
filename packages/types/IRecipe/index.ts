import {ObjectId} from "mongoose";

export default interface IRecipe {
  _id: ObjectId;
  title: string;
  author: ObjectId;
  ingredients: {
    ingredientId: ObjectId;
    quantity: string;
    optional?: string;
  }[];
  recipeParts: {
    partNumber: number;
    instructions: string;
  }[];
  tags: string[];
}
