import {ObjectId} from "mongoose";

export default interface IUser {
    username?: string;
    email: string;
    favoriteRecipes?: ObjectId[];
    password: string;
    myRecipes?: ObjectId[];
}
