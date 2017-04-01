import {Component, OnInit} from '@angular/core';

import {User} from '../user';
import {Group} from '../group';

import {AppService} from '../app.service';

@Component({
  selector: 'app-contacts',
  providers: [AppService],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users: User[];
  selectedUser: User;
  newUser: User;
  groups: Group[];
  createClicked: boolean;
  editClicked: boolean;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getUsers();
    this.newUser = new User();
    this.createClicked = false;
    this.editClicked = false;
    this.appService.getGroups()
      .then(groups => this.groups = groups);
  }

  getUsers(): void {
    this.appService.getUsers()
      .then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  newUserForm(): void {
    this.newUser = new User();
    this.createClicked = true;
  }

  addNewUser(): void {
    this.add(this.newUser.name, this.newUser.surname, this.newUser.age, this.newUser.group, this.newUser.description, this.newUser.note);
    this.createClicked = false;
  }

  add(name: string, surname: string, age: number, group: string, description: string, note: string): void {
    name = name.trim();
    surname = surname.trim();

    this.appService.createUser(name, surname, age, group, description, note).then(user => {
      this.users.push(user);
      let userGroup = this.groups.filter(group => group.name == user.group)[0];
      userGroup.members.push(user);
      this.appService.updateGroup(userGroup);
      this.selectedUser = null;
    });
  }

  saveChanges(): void {
    this.appService.updateUser(this.selectedUser)
      .then(() => this.editClicked = false);
  }

  deleteSelected(): void {
      this.appService.deleteUser(this.selectedUser.id)
        .then(() => {
          this.users = this.users.filter(u => u !== this.selectedUser);
          let userGroup = this.groups.filter(group => group.name == this.selectedUser.group)[0];
          userGroup.members = userGroup.members.filter(user => user.id !== this.selectedUser.id);
          this.appService.updateGroup(userGroup);
          this.selectedUser = null;
        });
  }
}
