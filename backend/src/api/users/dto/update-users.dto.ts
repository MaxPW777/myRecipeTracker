import { ObjectId } from 'mongoose';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUsersDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  favoriteRecipes?: ObjectId[];

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  myRecipes?: ObjectId[];
}
