import { Component, Inject, OnInit } from '@angular/core';
import { MDC_DIALOG_DATA, MdcDialogRef } from '@angular-mdc/web';
import { Todo } from '@nx-todo-app/api-interfaces';

@Component({
  selector: 'nx-todo-app-show-todo',
  templateUrl: './show-todo.component.html',
})
export class ShowTodoComponent implements OnInit {
  public todo: Todo = null;

  constructor(private dialogRef: MdcDialogRef<ShowTodoComponent>, @Inject(MDC_DIALOG_DATA) public data: Todo) {}

  ngOnInit(): void {
    if (this.data) {
      this.todo = this.data;
    } else {
      this.dialogRef.close();
    }
  }
}
