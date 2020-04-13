import { Component, OnInit } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { ShowTodoComponent } from '../show-todo/show-todo.component';
import { MdcDialog } from '@angular-mdc/web';
import { TodoService } from '../../../services/todo.service';
import { DeviceService } from '../../../services/device.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Todo } from '@nx-todo-app/api-interfaces';

@Component({
  selector: 'nx-todo-app-list-todo',
  templateUrl: './list-todo.component.html',
})
export class ListTodoComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(
    private dialog: MdcDialog,
    public todosService: TodoService,
    public deviceService: DeviceService,
    public deviceDetectorService: DeviceDetectorService,
  ) {}

  async ngOnInit() {
    this.todos = (await this.todosService.getAll()).sort((a: Todo, b: Todo) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  public add(): void {
    const dialogRef = this.dialog.open<AddTodoComponent>(AddTodoComponent, {
      clickOutsideToClose: true,
      escapeToClose: true,
    });

    dialogRef.afterClosed().subscribe(async (todo: Todo) => {
      if (typeof todo !== 'object') {
        return;
      }

      await this.todosService.create(todo);
      this.ngOnInit();
    });
  }

  public edit(todo: Todo): void {
    const dialogRef = this.dialog.open<EditTodoComponent, Todo>(EditTodoComponent, {
      data: todo,
      clickOutsideToClose: true,
      escapeToClose: true,
    });

    dialogRef.afterClosed().subscribe(async (t: any) => {
      if (typeof t !== 'object') {
        return;
      }

      await this.todosService.update(t.id, t);
      this.ngOnInit();
    });
  }

  public async delete(todo: Todo): Promise<void> {
    await this.todosService.delete(todo.id);
    this.ngOnInit();
  }

  public show(todo: Todo): void {
    this.dialog.open<ShowTodoComponent, Todo>(ShowTodoComponent, {
      data: todo,
      clickOutsideToClose: true,
      escapeToClose: true,
    });
  }

  public trackById(index: number, item: Todo): any {
    return item.id;
  }
}
