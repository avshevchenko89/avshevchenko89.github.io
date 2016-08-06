import { Component } from '@angular/core';

import { TodoService } from './todo-service';
import { TodoModel } from './todo-model';

@Component({
    selector: 'to-do-list',
    template: `
        <ol>
            <li *ngFor="let todo of todoService.todos">
                <span [contentEditable]="todo.status === false">{{todo.title}}</span>
                <button class="edit" (click)="todo.edit()">Edit</button>
                <button class="remove" (click)="toDelete(todo)">x</button>
            </li>
        </ol>
    `,
    styles: [`
        .remove {
            cursor: pointer
        }
    `]
})

export class TodoListComponent {
    newTodoValue;
    selectedTodo: TodoModel;

    constructor(public todoService: TodoService) {  }

    toDelete(item) {
        let index = this.todoService.todos.indexOf(item);
        this.todoService.todos.splice(index, 1);
    }
}