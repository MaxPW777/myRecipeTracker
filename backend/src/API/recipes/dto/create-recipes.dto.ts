import { ObjectId } from 'mongoose';

export class CreateRecipesDto {
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
