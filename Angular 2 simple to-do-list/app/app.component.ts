import { Component } from '@angular/core';

import { TodoInputComponent } from './todo-input.component';
import { TodoService } from './todo-service';
import { TodoListComponent } from './to-do-list.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="wrapper">
        <h1>To-do List: </h1>
        <to-do-input></to-do-input>
        <to-do-list></to-do-list>
    </div>
    `,
    directives: [TodoInputComponent, TodoListComponent],
    providers: [TodoService]
})
export class AppComponent { }
