import {ObjectId} from "mongoose";

export default interface IUser {
    id: string;
    username?: string;
    email: string;
    favoriteRecipes?: ObjectId[];
    password: string;
    myRecipes?: ObjectId[];
}
