import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../api/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private todoService = inject(TodoService);
  private router = inject(Router);

  editMode = false;

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  @Input() todo!: Todo;
  @Input() listPage = false;
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() editTodo = new EventEmitter<Todo>();

  ngOnInit(): void {
    this.todoForm.setValue({
      title: this.todo.title,
      description: this.todo.description
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  onDelete(todo: Todo) {
    if (!todo.id) return;
    
    this.todoService.deleteTodoById(todo.id).subscribe(() => {
      this.deleteTodo.emit(todo.id);
    });
  }

  onEdit() {
    if (!this.todoForm.valid) return; 

    const title = this.todoForm.value.title;
    const description = this.todoForm.value.description;

    if (!title || !description) return;

    const newTodo = {
      ...this.todo,
      title,
      description
    }

    this.todoService.updateTodoById(newTodo).subscribe((newTodo) => {
      this.editTodo.emit(newTodo);
      this.toggleEdit();
    });
  }

  openItem() {
    this.router.navigate(['/todo', this.todo.id]);
  }

}
