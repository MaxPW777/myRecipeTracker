import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

@Schema({
    timestamps: true,
    collection: 'Users'
})

export class Users {

    @Prop()
    nom: string;

    @Prop()
    email: string;

    @Prop()
    favorite: ObjectId[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);