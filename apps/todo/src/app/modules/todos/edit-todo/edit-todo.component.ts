import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MDC_DIALOG_DATA, MdcDialogRef } from '@angular-mdc/web';

@Component({
  selector: 'nx-todo-app-edit-todo',
  templateUrl: './edit-todo.component.html'
})
export class EditTodoComponent implements OnInit {
  public editForm: FormGroup;

  constructor(
    private dialogRef: MdcDialogRef<EditTodoComponent>,
    @Inject(MDC_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  // get the form short name to access the form fields
  public get f() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      date: ['', Validators.required],
      label: ['', Validators.required],
      tag: ['', Validators.required]
    });

    if (this.data.hasOwnProperty('todo') && this.data.todo) {
      this.editForm.patchValue(this.data.todo);
    }
  }

  public onSubmit(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
}
