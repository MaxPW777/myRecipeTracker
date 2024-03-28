import { ObjectId } from "mongoose";

export class CreateUsersDto {
    nom: string;
    email: string;
    favorite: ObjectId[];
}