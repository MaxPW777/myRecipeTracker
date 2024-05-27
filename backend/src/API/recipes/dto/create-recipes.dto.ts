import { ObjectId } from 'mongoose';

export class CreateRecipesDto {
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
