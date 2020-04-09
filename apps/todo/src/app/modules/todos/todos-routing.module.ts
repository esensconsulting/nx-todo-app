import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';

const routes: Routes = [
  { path: 'list', component: ListTodoComponent },
  { path: 'add', component: AddTodoComponent },
  { path: 'edit', component: EditTodoComponent },
  { path: 'show', component: ShowTodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
