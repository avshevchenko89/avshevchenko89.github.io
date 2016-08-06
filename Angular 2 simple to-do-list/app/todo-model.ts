export class TodoModel {
    status: boolean = true;

    constructor(public title: string = '') { }

    edit(): void {
        this.status =
            this.status == false
            ? this.status = true
                : false
    }
}
