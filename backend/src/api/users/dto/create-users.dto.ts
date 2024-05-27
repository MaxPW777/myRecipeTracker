import { ObjectId } from 'mongoose';

export class CreateUsersDto {
  username: string;
  email: string;
  password: string;
}
