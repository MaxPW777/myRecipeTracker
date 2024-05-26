import Ingredient from "../IIngredients";

export default interface IRecipe {
  _id: string;
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
