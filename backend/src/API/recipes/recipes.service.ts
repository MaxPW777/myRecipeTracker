import { Inject, Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";
import { Recipes } from "./schemas/recipes.schema";

@Injectable()
export class RecipesService {
    constructor(
        @InjectModel(Recipes.name) 
        private recipeModel: Model<Recipes>
    ) {}

    async findAll(): Promise<Recipes[]> {
        const recipes = await this.recipeModel.find();
        return recipes;
    }

    async create(recipe: Recipes): Promise<Recipes> {
        const res = await this.recipeModel.create(recipe);
        return res;
    }
}
