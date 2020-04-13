import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MDC_DIALOG_DATA, MdcDialogRef } from '@angular-mdc/web';
import { Todo } from '@nx-todo-app/api-interfaces';
import * as moment from 'moment';

@Component({
  selector: 'nx-todo-app-edit-todo',
  templateUrl: './edit-todo.component.html',
})
export class EditTodoComponent implements OnInit {
  public editForm: FormGroup;

  constructor(
    private dialogRef: MdcDialogRef<EditTodoComponent>,
    @Inject(MDC_DIALOG_DATA) public data: Todo,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      date: [moment(this.data.date).format('YYYY-MM-DD'), Validators.required],
      label: [this.data.label, Validators.required],
      tag: [this.data.tag, Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(Object.assign(this.data, this.editForm.value));
    }
  }
}
