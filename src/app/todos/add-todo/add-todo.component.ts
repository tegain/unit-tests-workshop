import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodoForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addTodoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  get titleField(): AbstractControl {
    return this.addTodoForm.get('title');
  }

  clearTitle() {
    this.titleField.setValue('');
  }
}
