import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../API/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
