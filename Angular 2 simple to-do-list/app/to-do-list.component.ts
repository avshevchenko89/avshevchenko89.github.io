import { Component } from '@angular/core';

import { TodoService } from './todo-service';
import { TodoModel } from './todo-model';

@Component({
    selector: 'to-do-list',
    template: `
        <ol>
            <li *ngFor="let todo of todoService.todos">
                {{todo.title}}
                <button class="remove" (click)="toDelete(todo)">x</button>
                <button class="edit" (click)="toEdit(todo)">Edit</button>
            </li>
        </ol>
        <form *ngIf="selectedTodo" (submit)="todoChange()">
            <input [(ngModel)]="newTodoValue">
        </form>
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

    toEdit(item) {
        this.selectedTodo = new TodoModel();

        let index = this.todoService.todos.indexOf(item);
        this.todoService.todos[index].title = 'Something new';
    }

    todoChange() {
        console.log(this.newTodoValue);
    }

}