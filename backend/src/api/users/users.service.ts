import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';
import { UpdateUsersDto } from './dto/update-users.dto';
import {CreateUsersDto} from "@/src/API/users/dto/create-users.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
  ) {}

  async findOne(username: string): Promise<Users | undefined> {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  async findAll(): Promise<Users[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUserById(id: string): Promise<Users> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async create(user: CreateUsersDto): Promise<Users> {
    const res = await this.userModel.create(user);
    return res;
  }

  async updateUsers(
    id: string,
    updateUsersDto: UpdateUsersDto,
  ): Promise<Users> {
    const res = await this.userModel.findByIdAndUpdate(id, updateUsersDto, {
      new: true,
    });
    return res;
  }

  async deleteUser(id: string): Promise<Users> {
    const res = await this.userModel.findByIdAndDelete(id);
    return res;
  }
}
