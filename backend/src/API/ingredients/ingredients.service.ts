import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingredients } from './schemas/ingredients.schema';
import { CreateIngredientsDto } from '@/src/API/ingredients/dto/create-ingredients.dto';

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

  async findByCategory(category: string): Promise<Ingredients[]> {
    const ingredients = await this.ingredientModel.find({ category });
    return ingredients;
  }

  async create(ingredient: CreateIngredientsDto): Promise<Ingredients> {
    const res = await this.ingredientModel.create(ingredient);
    return res;
  }
}
