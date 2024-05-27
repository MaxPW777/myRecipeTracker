import {ObjectId} from "mongoose";

export default interface IRecipe {
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
  image: string;
  tags: string[];
}
