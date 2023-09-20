import { IsInt, IsOptional, IsString } from "class-validator";


export class CreateAddressDTO {

    @IsString()
    address: string;

    @IsString()
    neighborhood: string;

    @IsString()
    cep: string;

    @IsInt()
    numberAddress: number;

    @IsString()
    @IsOptional()
    complement: string;

    @IsInt()
    cityId: number;
}