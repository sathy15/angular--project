import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({ templateUrl: 'home.component.html' ,
styleUrls: ['./home.component.scss'],})
export class HomeComponent {
    loading = false;
    users: User[];
    sidebarExpanded = true;


    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}

function styleUrls(arg0: { templateUrl: string; },styleUrls: any,arg2: string[]) {
throw new Error('Function not implemented.');
}
