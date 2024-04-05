import { Body, Controller, Get, Post, Param, HttpException } from "@nestjs/common";
import { IngredientsService } from "./ingredients.service";
import { Ingredients } from "./schemas/ingredients.schema";
import { CreateIngredientsDto } from "./dto/create-ingredients.dto";
import { mongo } from "mongoose";


@Controller('ingredients')

export class IngredientsController {
    constructor(private ingredientsService: IngredientsService) { }

    @Get()
    async getAllIngredients(): Promise<Ingredients[]> {
        return this.ingredientsService.findAll();
    }

    @Get(":id")
    async getIngredientById(@Param('id') id: string): Promise<Ingredients> {
        const ingredient = await this.ingredientsService.findById(id);
        const isValid = mongo.ObjectId.isValid(id);
        if (!isValid) {
            throw new HttpException("Invalid id",400);
        }
        if (!ingredient) {
            throw new HttpException("Ingredient not found",404);
        }
        return ingredient;
    }

    @Post()
    async createIngredient(
        @Body()
        ingredient : CreateIngredientsDto
    ): Promise<Ingredients> {
        return this.ingredientsService.create(ingredient);
    }
}