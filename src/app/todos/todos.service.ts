import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { todosFixtures } from '@app/todos/todos.fixtures';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos$ = new BehaviorSubject([]);

  setTodos(): void {
    this.todos$.next(todosFixtures);
  }
}
