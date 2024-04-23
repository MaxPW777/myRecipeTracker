import Ingredient from "./Ingredient";

export default interface IRecipe {
  id: string;
  title: string;
  author: string;
  ingredients: {
    ingredient: Ingredient;
    quantity: string;
    optional?: string;
  }[];
  recipeParts: {
    partNumber: number;
    instructions: string;
  }[];
  tags: string[];
}
