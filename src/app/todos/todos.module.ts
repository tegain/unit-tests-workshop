import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { TodosComponent } from '@app/todos/todos.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  declarations: [TodosComponent, TodosListComponent, AddTodoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodosComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class TodosModule {}
