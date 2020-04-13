import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { MdcModule } from '../../mdc.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListTodoComponent, AddTodoComponent, EditTodoComponent, ShowTodoComponent],
  exports: [ListTodoComponent],
  imports: [CommonModule, MdcModule, FlexLayoutModule, TodosRoutingModule, ReactiveFormsModule],
})
export class TodosModule {}
