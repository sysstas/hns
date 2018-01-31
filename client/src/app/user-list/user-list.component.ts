import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/index';
import { User } from '../interfaces/user';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  currentUser: User;
  users: User[] =  [];

  // forms testing
  languages: any = ['English', 'Ukrainian', 'Polish'];
  model = new Employee('', 'Smith', true, 'w2', 'default');
  hasPrimaryLanguageError = false;

  // function Make first letter always UpperCase
  firstNameToUppercase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value; }
    }
  // function checks is language choosen
  validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;

    }
  }
  // Main logic
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(() =>  {this.loadAllUsers(); } );
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe( users => { this.users = users; });
  }
}
