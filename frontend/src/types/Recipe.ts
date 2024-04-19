export default interface IRecipe {
  id: string;
  title: string;
  author: string;
  ingredients: {
    ingredientId: string;
    quantity: string;
    optional?: string;
  }[];
  recipeParts: {
    partNumber: number;
    instructions: string;
  }[];
  tags: string[];
}
