import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipes } from './schemas/recipes.schema';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipes.name)
    private recipeModel: Model<Recipes>,
  ) {}

  async findAll(): Promise<Recipes[]> {
    const recipes = await this.recipeModel.find();
    return recipes;
  }

  async findById(id: string): Promise<Recipes> {
    const recipe = await this.recipeModel.findById(id);
    return recipe;
  }

  async create(recipe: Recipes): Promise<Recipes> {
    const res = await this.recipeModel.create(recipe);
    return res;
  }

  async findByAuthor(authorid: string): Promise<Recipes[]> {
    const recipes = await this.recipeModel.find({ author: authorid });
    return recipes;
  }
}
