import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'Ingredients',
})
export class Ingredients {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  image: string;
}

export const IngredientsSchema = SchemaFactory.createForClass(Ingredients);
