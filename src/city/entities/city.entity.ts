import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ name: 'update_at' })
    update_at: Date;
}