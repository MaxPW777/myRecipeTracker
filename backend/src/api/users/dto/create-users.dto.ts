import { ObjectId } from "mongoose";

export class CreateUsersDto {
    username: string;
    email: string;
    favoriteRecipes: ObjectId[];
    password: string;
    myRecipes: ObjectId[];
}