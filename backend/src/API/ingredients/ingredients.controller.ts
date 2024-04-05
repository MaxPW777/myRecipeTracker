import { Body, Controller, Get, Post } from "@nestjs/common";
import { IngredientsService } from "./ingredients.service";
import { Ingredients } from "./schemas/ingredients.schema";
import { CreateIngredientsDto } from "./dto/create-ingredients.dto";


@Controller('ingredients')

export class IngredientsController {
    constructor(private ingredientsService: IngredientsService) { }

    @Get()
    async getAllIngredients(): Promise<Ingredients[]> {
        return this.ingredientsService.findAll();
    }

    @Post()
    async createIngredient(
        @Body()
        ingredient : CreateIngredientsDto
    ): Promise<Ingredients> {
        return this.ingredientsService.create(ingredient);
    }
}