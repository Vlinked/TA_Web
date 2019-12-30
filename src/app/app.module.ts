import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {UserComponent} from './user/user.component';

import { MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule,MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatSelectModule,
  MatPaginatorModule 
   } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsComponent } from './jobs/jobs.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewjobComponent } from './newjob/newjob.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { DemotableComponent } from './demotable/demotable.component';



@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   UserComponent,
   JobsComponent,
   InterviewerComponent,
   HomepageComponent,
   NewjobComponent,
   CandidateProfileComponent,
   ProfileComponent,
   DemotableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
