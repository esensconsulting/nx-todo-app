import { Component, Inject, OnInit } from '@angular/core';
import { MDC_DIALOG_DATA, MdcDialogRef } from '@angular-mdc/web';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'nx-todo-app-show-todo',
  templateUrl: './show-todo.component.html',
})
export class ShowTodoComponent implements OnInit {
  public todo: Todo = null;

  constructor(private dialogRef: MdcDialogRef<ShowTodoComponent>, @Inject(MDC_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if (this.data.hasOwnProperty('todo') && this.data.todo) {
      this.todo = this.data.todo;
    } else {
      this.dialogRef.close();
    }
  }
}
