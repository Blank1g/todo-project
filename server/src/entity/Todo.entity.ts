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
    title: string;
  
    @Column({ nullable: false })
    description: string;

    @ManyToOne(() => User, user => user.todo)
    user: User;
}