import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.scss'
})
export class TodoCreateComponent {

  private formBuilder = inject(FormBuilder);

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  @Output() createTodo = new EventEmitter<Todo>();

  onCreate() {
    if (!this.todoForm.valid) return;

    const title = this.todoForm.value.title;
    const description = this.todoForm.value.description;

    if (!title || !description) return;

    this.createTodo.emit({ title, description });
  }

}
