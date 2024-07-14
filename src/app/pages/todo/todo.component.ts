import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../api/todo.service';
import { TodoItemComponent } from "../../components/todo-item/todo-item.component";
import { TodoCreateComponent } from "../../components/todo-create/todo-create.component";
import { CacheService } from '../../api/cache.service';
import { map } from 'rxjs';
import { TodoRecentComponent } from "../../components/todo-recent/todo-recent.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoCreateComponent, TodoRecentComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoPageComponent implements OnInit {

  private todoService = inject(TodoService);
  private cacheService = inject(CacheService);

  todos: Todo[];
  cachedTodo: Todo;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
      this.getCahcedTodo();
    });
  }

  createTodo(todo: Todo) {
    this.todoService.createTodo(todo).pipe(
      map((newTodo: Todo) => {
        if (newTodo.id) {
          this.cacheService.cacheLatestTodo(newTodo.id).subscribe((id: string) => {
            this.getCahcedTodo(id);
          });
        }
        return newTodo;
      }),
    ).subscribe((newTodo: Todo) => {
      this.todos.push(newTodo);
    });
  }
  

  getCahcedTodo(id?: string) {
    if (!id) {
      this.cacheService.getCachedTodoId().subscribe((cachedTodoId: string) => {
        console.log(cachedTodoId, 'cachedTodoId');
        
        const cachedTodo = this.todos.find((t) => t.id === cachedTodoId);
  
        if (cachedTodo) {
          this.cachedTodo = cachedTodo;
        }
      });
    } else {
      const cachedTodo = this.todos.find((t) => t.id === id);
  
      if (cachedTodo) {
        this.cachedTodo = cachedTodo;
      }
    }
  }

  editTodo(newTodo: Todo) {
    this.todos = this.todos.map((t) => {
      if (t.id === newTodo.id) {
        return newTodo;
      }
      return t;
    });
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

}
