import { Component, OnInit } from '@angular/core';
export interface interviewer {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.css']
})  
export class InterviewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  interviewers: interviewer[] = [
    {value: 'mohan reddy', viewValue: 'Mohan Reddy'},
    {value: 'reddy mohan', viewValue: 'Reddy Mohan'},
    {value: 'mohan', viewValue: 'Mohan'}
  ];

}
