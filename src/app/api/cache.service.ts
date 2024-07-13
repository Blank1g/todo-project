import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private url = `${environment.API_URL}/cache`;

  private http = inject(HttpClient);

  constructor() { }

  cacheLatestTodo(id: string) {
    return this.http.post<string>(`${this.url}`, { cacheKey: 'todo', data: id });
  }

  getCachedTodoId() {
    return this.http.get<string>(`${this.url}/todo`);
  }

}
