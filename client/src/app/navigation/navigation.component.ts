import { Component, OnInit } from '@angular/core';


import { UserService } from '../_services/index';
import { User } from '../interfaces/user';


@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    }    
}
