import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
    collection: 'Users'
})

export class Users {

    @Prop()
    nom: string;

    @Prop()
    email: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);