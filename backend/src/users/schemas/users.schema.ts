import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})

export class Users {

    @Prop()
    name: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);