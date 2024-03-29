import { Body, Controller, Get, Post } from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { Recipes } from "./schemas/recipes.schema";
import { CreateRecipesDto } from "./dto/create-recipes.dto";


@Controller('recipes')

export class RecipesController {
    constructor(private recipesService: RecipesService) { }

    @Get()
    async getAllRecipes(): Promise<Recipes[]> {
        return this.recipesService.findAll();
    }

    @Post()
    async createRecipe(
        @Body()
        recipe : CreateRecipesDto
    ): Promise<Recipes> {
        return this.recipesService.create(recipe);
    }
}