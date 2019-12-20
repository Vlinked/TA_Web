import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {UserComponent} from './user/user.component';

import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule,MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatSelectModule 
   } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsComponent } from './jobs/jobs.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   UserComponent,
   JobsComponent,
   InterviewerComponent,
   HomepageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
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
    MatSelectModule 
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
    MatSelectModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
