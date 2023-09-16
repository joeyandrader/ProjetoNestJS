import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUSerDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './Interfaces/user.interface';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Post()
    async CreateUser(@Body() createUser: CreateUSerDto) {
        return this.userService.createUser(createUser);
    }

    @Get()
    async GetAllUser(): Promise<User[]> {
        return this.userService.getAllUser();
    }
}
