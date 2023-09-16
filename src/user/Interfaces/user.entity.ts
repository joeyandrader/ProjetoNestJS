import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'firstname', nullable: false })
    firstname: string;

    @Column({ name: 'lastname', nullable: false })
    lastname: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'phone' })
    phone: string;

    @Column({ name: 'cpf', nullable: false })
    cpf: string;

    @Column({ name: 'password', nullable: false })
    password: string;
}