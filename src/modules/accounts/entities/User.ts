import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
        
    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column()
    driver_license: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;
}