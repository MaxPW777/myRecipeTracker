export default interface IRecipe {
  _id: string;
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
