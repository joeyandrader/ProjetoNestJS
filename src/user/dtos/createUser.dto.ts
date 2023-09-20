import { IsString } from "class-validator";

export class CreateUSerDto {
    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    cpf: string;

    @IsString()
    password: string;
}