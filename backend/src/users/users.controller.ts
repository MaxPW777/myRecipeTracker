import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Users } from "./schemas/users.schema";
import { CreateUsersDto } from "./dto/create-users.dto";


@Controller('userstest')

export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getAllUsers(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Post()
    async createUser(
        @Body()
        user : CreateUsersDto
    ): Promise<Users> {
        return this.usersService.create(user);
    }
}