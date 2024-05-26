import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import IUser from '@packages/types/IUser';

@Schema({
  timestamps: true,
  collection: 'Users',
})
export class Users implements IUser {
  @Prop()
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  favoriteRecipes: ObjectId[];

  @Prop({ required: true })
  password: string;

  @Prop()
  myRecipes: ObjectId[];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
