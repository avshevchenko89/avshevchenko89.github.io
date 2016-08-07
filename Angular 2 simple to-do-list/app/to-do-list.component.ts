import { Component } from '@angular/core';

import { TodoService } from './todo-service';
import { TodoItemRendererComponent } from './todo-item-renderer.component'

@Component({
    selector: 'to-do-list',
    template: `
        <ul>
            <li *ngFor="let todo of todoService.todos">
                <todo-item-renderer [todo]="todo"></todo-item-renderer>
            </li>
        </ul>
    `,
    directives: [TodoItemRendererComponent]
})

export class TodoListComponent {

    constructor(public todoService: TodoService) {  }

}