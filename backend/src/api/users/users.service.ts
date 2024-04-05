import { Inject, Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection, ObjectId } from "mongoose";
import { Users } from "./schemas/users.schema";
import { UpdateUsersDto } from "./dto/update-users.dto";

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

    async updateUsers(id: string, updateUsersDto: UpdateUsersDto): Promise<Users> {
        const res = await this.userModel.findByIdAndUpdate(id, updateUsersDto , {new: true});
        return res;
    }

    async deleteUser(id: string): Promise<Users> {
        const res = await this.userModel.findByIdAndDelete(id);
        return res;
    }
}
