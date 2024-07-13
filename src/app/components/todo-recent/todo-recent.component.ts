import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-recent',
  standalone: true,
  imports: [],
  templateUrl: './todo-recent.component.html',
  styleUrl: './todo-recent.component.scss'
})
export class TodoRecentComponent {

  private router = inject(Router);

  @Input() todo: Todo;

  redirect() {
    this.router.navigate(['/todo', this.todo.id]);
  }

}
