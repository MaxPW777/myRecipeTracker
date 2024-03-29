import { Inject, Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";
import { Users } from "./schemas/users.schema";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) 
        private userModel: Model<Users>
    ) {}

    async findAll(): Promise<Users[]> {
        const users = await this.userModel.find();
        return users;
    }

    async create(user: Users): Promise<Users> {
        const res = await this.userModel.create(user);
        return res;
    }
}
