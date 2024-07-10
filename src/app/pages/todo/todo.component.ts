import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../api/todo.service';
import { TodoItemComponent } from "../../components/todo-item/todo-item.component";
import { TodoCreateComponent } from "../../components/todo-create/todo-create.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoCreateComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoPageComponent implements OnInit {

  private todoService = inject(TodoService);

  todos: Todo[];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodoById(id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }

  editTodo(todo: Todo) {
    this.todoService.updateTodoById(todo).subscribe(() => {
      this.todos = this.todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
    });
  }

  createTodo(todo: Todo) {
    this.todoService.createTodo(todo).subscribe((newTodo: Todo) => {
      this.todos = [...this.todos, newTodo];
    });
  }

}
