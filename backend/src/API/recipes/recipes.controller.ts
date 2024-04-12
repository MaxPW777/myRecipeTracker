import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  HttpException,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipes } from './schemas/recipes.schema';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { mongo } from 'mongoose';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get(':id')
  async getRecipeById(@Param('id') id: string): Promise<Recipes> {
    const isValid = mongo.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid id', 400);
    }
    const recipe = await this.recipesService.findById(id);
    if (!recipe) {
      throw new HttpException('Recipe not found', 404);
    }
    return recipe;
  }

  @Post()
  async createRecipe(
    @Body()
    recipe: CreateRecipesDto,
  ): Promise<Recipes> {
    return this.recipesService.create(recipe);
  }
}
