import { Component, OnInit } from '@angular/core';

import { Group } from '../group';

import {AppService} from '../app.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  selectedGroup: Group;
  createClicked: boolean;
  editClicked: boolean;
  newGroup: Group;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.appService.getGroups()
      .then(groups => this.groups = groups);
  }

  groupSelected(group: Group): void {
    this.selectedGroup = group;
  }

  newGroupForm(): void {
    this.createClicked = true;
    this.newGroup = new Group();
  }

  addNewGroup(): void {
    this.add(this.newGroup.name);
    this.createClicked = false;
  }

  add(name: string): void {
    name = name.trim();

    this.appService.createGroup(name, []).then(group => {
      this.groups.push(group);
      this.selectedGroup = null;
    });
  }

  editGroup(): void {
    this.appService.updateGroup(this.selectedGroup)
      .then(() => this.editClicked = false);
  }

  deleteSelected(): void {
    this.appService.deleteGroup(this.selectedGroup.id)
      .then(() => {
        this.groups = this.groups.filter(u => u !== this.selectedGroup);
        this.selectedGroup = null;
      });
  }
}
