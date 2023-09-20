import { AddressEntity } from "src/address/entities/address.entity";
import { StateEntity } from "src/state/entities/state.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'state_id', nullable: false })
    stateId: number;


    @Column({ name: 'created_at' })
    created_at: Date;

    @Column({ name: 'updated_at' })
    update_at: Date;

    //Relationship
    @OneToMany(() => AddressEntity, (addresses) => addresses.city)
    addresses?: AddressEntity[];

    @ManyToOne(() => StateEntity, (state) => state.cities)
    @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
    state?: StateEntity
}