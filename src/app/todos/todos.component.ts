import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '@app/todos/todo.model';
import { TodosService } from '@app/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private readonly todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$;
    this.todosService.setTodos();
  }
}
