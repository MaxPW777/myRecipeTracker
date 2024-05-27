import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
import IRecipe from '@packages/types/IRecipe';

@Schema({
  _id: true,
  timestamps: true,
  collection: 'Recipes',
})
export class Recipes implements IRecipe {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  author: ObjectId;

  @Prop({ required: true })
  ingredients: {
    ingredientId: ObjectId;
    quantity: string;
    optional?: string;
  }[];

  @Prop({ required: true })
  recipeParts: {
    partNumber: number;
    instructions: string;
  }[];

  @Prop()
  tags: string[];

    @Prop()
    image: string;
}

export const RecipesSchema = SchemaFactory.createForClass(Recipes);
