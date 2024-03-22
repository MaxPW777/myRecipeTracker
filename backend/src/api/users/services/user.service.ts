import { Injectable, NotFoundException } from '@nestjs/common';
import { UserModel } from '../models/user.models';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../models/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserModel) {}

  async register(createUserDto: CreateUserDto): Promise<UserDto> {
    const createdUser = await this.userModel.create(createUserDto);
    return this.mapToUserDto(createdUser);
  }

  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.userModel.findAll();
    return users.map(user => this.mapToUserDto(user));
  }

  async getUserById(id: string): Promise<UserDto> {
    const user = await this.userModel.findOneById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.mapToUserDto(user);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    try {
      const updatedUser = await this.userModel.updateById(id, updateUserDto);
      return this.mapToUserDto(updatedUser);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  async deleteUser(id: string): Promise<void> {
    await this.userModel.deleteById(id);
  }

  private mapToUserDto(user: User): UserDto {
    return {
      id: user.id,
      username: user.username,
      email: user.email
    };
  }
}
