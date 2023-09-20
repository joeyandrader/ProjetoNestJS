import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUSerDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @UsePipes(ValidationPipe)
    @Post()
    async CreateUser(@Body() createUser: CreateUSerDto): Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async GetAllUser(): Promise<ReturnUserDto[]> {
        return (await this.userService.getAllUser()).map(
            (userEntity) => new ReturnUserDto(userEntity)
        );
    }
}
