import { Inject, Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Ingredients } from './schemas/ingredients.schema';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredients.name)
    private ingredientModel: Model<Ingredients>,
  ) {}

  async findAll(): Promise<Ingredients[]> {
    const ingredients = await this.ingredientModel.find();
    return ingredients;
  }

  async findById(id: string): Promise<Ingredients> {
    const ingredient = await this.ingredientModel.findById(id);
    return ingredient;
  }

  async create(ingredient: Ingredients): Promise<Ingredients> {
    const res = await this.ingredientModel.create(ingredient);
    return res;
  }
}
