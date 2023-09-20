import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUSerDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }


    async createUser(createUSerDto: CreateUSerDto): Promise<UserEntity> {
        const saltOrRounds = 12;
        const passwordHash = await bcrypt.hash(createUSerDto.password, saltOrRounds)
        return await this.userRepository.save({
            ...createUSerDto,
            type_user: 1,
            password: passwordHash
        })
    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    
    async findUserById(userId: number): Promise<UserEntity> {
       
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            }
        })
        
        if (!user) {
            throw new NotFoundException("User id not found");
        }
        return user;
    }
}
