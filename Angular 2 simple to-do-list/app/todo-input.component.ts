import { Component } from '@angular/core';

import { TodoService } from './todo-service';
import { TodoModel } from './todo-model';

@Component({
    selector: 'to-do-input',
    template: `
    <div>
        <form (submit)="onSubmit()">
            <input placeholder="Item to do" [(ngModel)]="todoModel.title">
        </form>
        <button (click)="onClick()">Add</button>
    </div>
    `
})

export class TodoInputComponent {
    todoModel: TodoModel = new TodoModel();

    constructor(public todoService: TodoService) { }

    onClick() {
        this.todoService.todos.push(this.todoModel);
        this.todoModel = new TodoModel();
    }

    onSubmit() {
        this.todoService.todos.push(this.todoModel);
        this.todoModel = new TodoModel();
    }
}
