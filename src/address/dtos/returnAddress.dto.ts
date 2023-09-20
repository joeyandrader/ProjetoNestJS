import { AddressEntity } from "../entities/address.entity";

export class ReturnAddressDTO {
    address: string;
    neighborhood: string;
    cep: string;
    numberAddress: number;
    complement: string;

    constructor(
        address: AddressEntity
    ) {
        this.address = address.address;
        this.neighborhood = address.neighborhood;
        this.cep = address.cep;
        this.numberAddress = address.numberAddress;
        this.complement = address.complement;
    }
}