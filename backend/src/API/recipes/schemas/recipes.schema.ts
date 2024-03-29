import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import * as mongoose from 'mongoose';

@Schema({
    timestamps: true,
    collection: 'Recipes'
})
export class Recipes {

    @Prop({ required: true})
    title: string;

    @Prop({ required:true,type: mongoose.Schema.Types.ObjectId})
    author: ObjectId;

    @Prop({required: true})
    ingredients: { 
        ingredientId: ObjectId;
        quantity: string;
        optional?: string;
    }[];

    @Prop({required: true})
    recipeParts: {
        partNumber: number;
        instructions: string;
    }[];

    @Prop()
    tags: string[];
}

export const RecipesSchema = SchemaFactory.createForClass(Recipes);
