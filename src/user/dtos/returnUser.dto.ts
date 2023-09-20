import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    cpf: string;

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.firstname = userEntity.firstname;
        this.lastname = userEntity.lastname;
        this.email = userEntity.lastname;
        this.phone = userEntity.phone;
        this.cpf = userEntity.cpf;
    }
}