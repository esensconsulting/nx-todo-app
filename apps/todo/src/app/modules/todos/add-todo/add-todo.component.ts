import { Component, OnInit } from '@angular/core';
import { MdcDialogRef } from '@angular-mdc/web';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'nx-todo-app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent implements OnInit {
  public addForm: FormGroup;

  constructor(private dialogRef: MdcDialogRef<AddTodoComponent>, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      date: [moment().format('YYYY-MM-DD'), Validators.required],
      label: ['', Validators.required],
      tag: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.addForm.valid) {
      this.dialogRef.close(this.addForm.value);
    }
  }
}
