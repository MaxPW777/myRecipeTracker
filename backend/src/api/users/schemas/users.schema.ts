import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'Users',
})
export class Users {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  favoriteRecipes: ObjectId[];

  @Prop()
  password: string;

  @Prop()
  myRecipes: ObjectId[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
