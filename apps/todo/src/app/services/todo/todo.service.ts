import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public save(todos: Todo[]): void {
    try {
      if (window.localStorage) {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  public getAll(): Todo[] {
    try {
      if (window.localStorage) {
        return JSON.parse(window.localStorage.getItem('todos') || '[]');
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
