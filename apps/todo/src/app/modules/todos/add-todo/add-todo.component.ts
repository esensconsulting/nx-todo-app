import { Component, Inject, OnInit } from '@angular/core';
import { MDC_DIALOG_DATA, MdcDialogRef } from '@angular-mdc/web';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nx-todo-app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent implements OnInit {
  public addForm: FormGroup;

  constructor(
    private dialogRef: MdcDialogRef<AddTodoComponent>,
    @Inject(MDC_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  // get the form short name to access the form fields
  public get f() {
    return this.addForm.controls;
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      label: ['', Validators.required],
      tag: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.addForm.valid) {
      this.dialogRef.close(this.addForm.value);
    }
  }
}
