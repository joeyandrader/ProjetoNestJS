import { Injectable } from '@nestjs/common';
import { CreateUSerDto } from './dtos/createUser.dto';
import { User } from './Interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUSerDto: CreateUSerDto): Promise<User> {
        const saltOrRounds = 12;
        const passwordHash = await bcrypt.hash(createUSerDto.password, saltOrRounds)
        const newUSer = {
            ...createUSerDto,
            id: this.users.length + 1,
            password: passwordHash
        }
        this.users.push(newUSer)
        return newUSer;
    }

    async getAllUser(): Promise<User[]> {
        return this.users;
    }
}
