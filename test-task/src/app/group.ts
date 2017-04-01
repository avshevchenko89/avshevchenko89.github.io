import { User } from './user';

export class Group {
    id: number;
    name: string;
    members: User[] = [];
}
