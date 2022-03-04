import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login';
import { ReportComponent } from './report/report.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'task', component: TaskComponent },
    { path: 'log', component: LogComponent },
    { path: 'report', component: ReportComponent },



    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
