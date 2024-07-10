import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = `${environment.API_URL}/todo`;

  private http = inject(HttpClient);

  constructor() { }

  getTodos() {
    return this.http.get<Todo[]>(this.url);
  }

  getTodoById(id: string) {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(`${this.url}`, todo);
  }

  updateTodoById(todo: Todo) {
    return this.http.put<Todo>(`${this.url}`, todo);
  }

  deleteTodoById(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
