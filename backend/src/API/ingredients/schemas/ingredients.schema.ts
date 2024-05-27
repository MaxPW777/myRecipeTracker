import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import IIngredients from '@packages/types/IIngredients';
import mongoose, { ObjectId } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'Ingredients',
})
export class Ingredients implements IIngredients {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: ObjectId;
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  image: string;
}

export const IngredientsSchema = SchemaFactory.createForClass(Ingredients);
