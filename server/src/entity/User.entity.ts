import {
    Entity,
    Column,
} from 'typeorm';

import { BaseEntity } from './Base.entity';
  
@Entity('users')
export class User extends BaseEntity{
    @Column({ nullable: false })
    name: string;
  
    @Column({ nullable: false })
    email: string;
  
    @Column({ nullable: false })
    password: string;
  
    @Column({ default: "user" })
    role: string;
}