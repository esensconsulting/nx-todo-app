import { Injectable } from '@angular/core';
import { Todo } from '@nx-todo-app/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly route = '/todos';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Promise<Todo[]> {
    return this.httpClient.get<Todo[]>(this.route).toPromise();
  }

  public get(id: string): Promise<Todo> {
    return this.httpClient.get<Todo>(`${this.route}/${id}`).toPromise();
  }

  public create(todo: Todo): Promise<Todo> {
    return this.httpClient.post<Todo>(this.route, todo).toPromise();
  }

  public update(id: string, todo: Todo): Promise<Todo> {
    return this.httpClient.put<Todo>(`${this.route}/${id}`, todo).toPromise();
  }

  public delete(id: string): Promise<any> {
    return this.httpClient.delete(`${this.route}/${id}`).toPromise();
  }
}
