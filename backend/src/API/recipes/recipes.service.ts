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
    return await this.recipeModel.find();
  }

  async findById(id: string): Promise<Recipes> {
    return await this.recipeModel.findById(id);
  }

  async create(recipe: Recipes): Promise<Recipes> {
    return await this.recipeModel.create(recipe);
  }

  async findByAuthor(authorid: string): Promise<Recipes[]> {
    return await this.recipeModel.find({ author: authorid });
  }
}
