
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../API/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    console.log('Username:', username);
    console.log('Password:', password);
    const user = await this.usersService.findOne(username);
    if (user?.password != password) {
      console.log('User not found', user.username);
      throw new UnauthorizedException();
    }
    const payload = { username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
