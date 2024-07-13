import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../api/todo.service';
import { TodoItemComponent } from "../../components/todo-item/todo-item.component";

@Component({
  selector: 'app-todo-item-page',
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponentPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private todoService = inject(TodoService);
  private router = inject(Router);

  todo!: Todo;

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.todoService.getTodoById(id).subscribe((todo: Todo) => {
        this.todo = todo;
      });
    });
  }

  deleteTodo() {
    this.router.navigate(['/todo']);
  }

  editTodo(newTodo: Todo) {
    this.todo = newTodo;
  }

}
