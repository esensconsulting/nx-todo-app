import { Component, OnInit } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { ShowTodoComponent } from '../show-todo/show-todo.component';
import { Todo } from '../../../models/todo.model';
import { MdcDialog } from '@angular-mdc/web';
import { TodoService } from '../../../services/todo/todo.service';
import { DeviceService } from '../../../services/device/device.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'nx-todo-app-list-todo',
  templateUrl: './list-todo.component.html'
})
export class ListTodoComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(
    private dialog: MdcDialog,
    public todosService: TodoService,
    public deviceService: DeviceService,
    public deviceDetectorService: DeviceDetectorService
  ) {}

  ngOnInit() {
    this.todos = this.todosService.getAll();
  }

  public add(): void {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      clickOutsideToClose: true,
      escapeToClose: true
    });

    dialogRef.afterClosed().subscribe((todo: Todo) => {
      if (typeof todo !== 'object') {
        return;
      }

      this.todos.push(todo);
      this.todosService.save(this.todos);
    });
  }

  public edit(todo: Todo): void {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      data: { todo: todo },
      clickOutsideToClose: true,
      escapeToClose: true
    });

    dialogRef.afterClosed().subscribe((output: Todo) => {
      if (typeof output !== 'object') {
        return;
      }

      const index = this.todos.findIndex(obj => obj === todo);
      this.todos.splice(index, 1, output);
      this.todosService.save(this.todos);
    });
  }

  public delete(todo: Todo): void {
    this.todos = this.todos.filter(obj => obj !== todo);
    this.todosService.save(this.todos);
  }

  public show(todo: Todo): void {
    this.dialog.open(ShowTodoComponent, {
      data: { todo: todo },
      clickOutsideToClose: true,
      escapeToClose: true
    });
  }
}
