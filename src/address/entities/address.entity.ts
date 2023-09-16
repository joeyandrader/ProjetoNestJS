import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'address', nullable: false })
    address: string;

    @Column({ name: 'neighborhood', nullable: false })
    neighborhood: string;

    @Column({ name: 'cep', nullable: false })
    cep: string;

    @Column({ name: 'number', nullable: false })
    numberAddress: number;

    @Column({ name: 'complement', nullable: true })
    complement: number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'city_id', nullable: false })
    cityId: number;

    @Column({ name: 'created_at' })
    created_at: Date;

    @Column({ name: 'update_at' })
    update_at: Date;
}