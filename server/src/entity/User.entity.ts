import {
    Entity,
    Column,
    OneToMany,
} from 'typeorm';

import { BaseEntity } from './Base.entity';
import { Todo } from './Todo.entity';
  
@Entity('users')
export class User extends BaseEntity{
    @Column({ nullable: false })
    name: string;
  
    @Column({ nullable: false, unique: true})
    email: string;
  
    @Column({ nullable: false })
    password: string;

    @OneToMany(() => Todo, todo => todo.user)
    todo: Todo[];
}