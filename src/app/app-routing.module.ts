import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {JobsComponent} from './jobs/jobs.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { HomepageComponent } from './homepage/homepage.component';

import {NewjobComponent} from './newjob/newjob.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { DemotableComponent } from './demotable/demotable.component';
=======
import { RegisterComponent } from './register/register.component';

>>>>>>> 985b0336b984237fabf8c104a97f6a3d5f016486


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path : 'jobs', component : JobsComponent},
  {path : 'interviewer', component : InterviewerComponent},
  {path : 'homepage', component : HomepageComponent},
  {path: 'newjob', component: NewjobComponent},
  {path: 'candidateprofile', component: CandidateProfileComponent},
  {path:'profile',component:ProfileComponent},
<<<<<<< HEAD
  {path:'demotable',component:DemotableComponent}
=======
  {path:'register',component:RegisterComponent}
>>>>>>> 985b0336b984237fabf8c104a97f6a3d5f016486
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
