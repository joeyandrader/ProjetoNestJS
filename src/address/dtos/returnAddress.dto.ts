import { ReturnCityDTO } from "src/city/dtos/returnCity.dto";
import { AddressEntity } from "../entities/address.entity";

export class ReturnAddressDTO {
    address: string;
    neighborhood: string;
    cep: string;
    numberAddress: number;
    complement: string;
    city?: ReturnCityDTO;

    constructor(
        address: AddressEntity
    ) {
        this.address = address.address;
        this.neighborhood = address.neighborhood;
        this.cep = address.cep;
        this.numberAddress = address.numberAddress;
        this.complement = address.complement;
        this.city = address.city ? new ReturnCityDTO(address.city) : undefined;
    }
}