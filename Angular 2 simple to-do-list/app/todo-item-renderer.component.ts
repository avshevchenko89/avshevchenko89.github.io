import { Component, Input } from '@angular/core';

import { TodoService } from './todo-service';

@Component({
    selector: 'todo-item-renderer',
    template: `
        <div>
            <span [contentEditable]="todo.status === false">{{todo.title}}</span>
            <div class="control-buttons">
                <button class="edit" (click)="todo.edit()">Edit</button>
                <button class="remove" (click)="toDelete(todo)">x</button>
            </div>
        </div>
    `
})

export class TodoItemRendererComponent {
    @Input() todo;

    constructor(public todoService: TodoService) {  }

    toDelete(item) {
        let index = this.todoService.todos.indexOf(item);
        this.todoService.todos.splice(index, 1);
    }
}
