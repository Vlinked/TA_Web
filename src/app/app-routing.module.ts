import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {JobsComponent} from './jobs/jobs.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { HomepageComponent } from './homepage/homepage.component';

import {NewjobComponent} from './newjob/newjob.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path : 'jobs', component : JobsComponent},
  {path : 'interviewer', component : InterviewerComponent},
  {path : 'homepage', component : HomepageComponent},
  {path: 'newjob', component: NewjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
