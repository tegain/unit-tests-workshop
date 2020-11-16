import { Component, Input } from '@angular/core';

import { Todo } from '@app/todos/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  @Input() todos: Todo[];
}
