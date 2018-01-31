import { Component, OnInit, OnChanges } from '@angular/core';



import { User } from '../interfaces/user';


@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
    currentUser: User;    



    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
}
