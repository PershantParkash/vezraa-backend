import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('agencies')
export class Agency {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({unique: true})
    code: string;

    @Column()
    db_name: string;

    @Column()
    db_user: string;

    @Column()
    db_pass: string;

    @Column({nullable: true})
    s3_bucket: string;

    @Column({default: true})
    isActive: boolean;
}