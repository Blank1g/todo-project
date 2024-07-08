import {
    Entity,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

import { BaseEntity } from './Base.entity';
import { User } from './User.entity';
  
@Entity('todos')
export class Todo extends BaseEntity{
    @Column({ nullable: false })
    name: string;
  
    @Column({ nullable: false, unique: true})
    email: string;
  
    @Column({ nullable: false })
    password: string;

    @ManyToOne(() => User, user => user.todo)
    user: User;
}