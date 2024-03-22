import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/user.models';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto'; // Import du DTO UserDto
import { User } from '../models/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserModel) {}

  async register(createUserDto: CreateUserDto): Promise<UserDto> {
    const createdUser = await this.userModel.create(createUserDto);
    // Transformez le modèle d'utilisateur en DTO d'utilisateur avant de le retourner
    return this.mapToUserDto(createdUser);
  }

  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.userModel.findAll();
    // Transformez les modèles d'utilisateurs en DTO d'utilisateurs avant de les retourner
    return users.map(user => this.mapToUserDto(user));
  }

  async getUserById(id: string): Promise<UserDto | null> {
    const user = await this.userModel.findOneById(id);
    // Si l'utilisateur n'est pas trouvé, retournez null
    if (!user) return null;
    // Transformez le modèle d'utilisateur en DTO d'utilisateur avant de le retourner
    return this.mapToUserDto(user);
  }

  // Méthode pour mapper un modèle d'utilisateur en DTO d'utilisateur
  private mapToUserDto(user: User): UserDto {
    return {
      id: user.id,
      username: user.username,
      email: user.email
    };
  }
}
