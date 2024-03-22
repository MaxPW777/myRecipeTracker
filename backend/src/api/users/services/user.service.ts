import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/user.models';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserModel) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    // Implémentez la logique d'enregistrement de l'utilisateur
    return this.userModel.create(createUserDto);
  }

  async getAllUsers(): Promise<User[]> {
    // Implémentez la logique pour récupérer tous les utilisateurs
    return this.userModel.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    // Implémentez la logique pour récupérer un utilisateur par son ID
    return this.userModel.findOneById(id);
  }

  // Ajoutez d'autres méthodes de service liées aux utilisateurs
}
