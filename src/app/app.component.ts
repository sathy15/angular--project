import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})

// @Component({
//     selector: 'my-sidebar',
//     templateUrl: './sidebar.component.html',
//     styleUrls: ['./sidebar.component.scss'],
//   })
export class AppComponent {
  isshow = true ;
  
  user: User;
  sidebarExpanded = true;
  isExpanded = 'sidebarExpanded';
  toggleSidebar() {
    'sidebarExpanded = !sidebarExpanded';
  }
  handleSidebarToggle = this.sidebarExpanded;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authenticationService.logout();
  }
}
