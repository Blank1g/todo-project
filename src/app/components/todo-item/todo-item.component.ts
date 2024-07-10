import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  editMode = false;

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  @Input() todo!: Todo;
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
    this.deleteTodo.emit(todo.id);
  }

  onEdit(todo: Todo) {
    if (!this.todoForm.valid) return; 

    const title = this.todoForm.value.title;
    const description = this.todoForm.value.description;

    if (!title || !description) return;

    this.editTodo.emit({ id: todo.id, title, description});
  }

}
