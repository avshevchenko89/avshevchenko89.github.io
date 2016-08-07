import { Injectable } from '@angular/core';

import { TodoModel } from './todo-model';

@Injectable()

export class TodoService {
    todos = [
        new TodoModel('Learn Angular 2'),
        new TodoModel('Learn JavaScript'),
        new TodoModel('Sleep')
    ];
}