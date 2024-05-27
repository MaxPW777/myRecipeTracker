import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<Users> {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const user = await this.usersService.getUserById(id);
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }

  @Post()
  async createUser(
    @Body()
    user: CreateUsersDto,
  ): Promise<Users> {
    return this.usersService.create(user);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUsersDto,
  ): Promise<Users> {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updateUser = await this.usersService.updateUsers(id, updateUserDto);
    if (!updateUser) throw new HttpException('User not found', 404);
    return updateUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<Users> {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deleteUser = await this.usersService.deleteUser(id);
    if (!deleteUser) throw new HttpException('User not found', 404);
    return deleteUser;
  }
}
