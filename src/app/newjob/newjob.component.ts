import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})

export class NewjobComponent implements OnInit {
  role: string;
  newJobForm;
  roles: string[] = [
    "Android developer", "Software developer", "Senior software developer", 
    "Team lead", "Full stack developer"
  ];
  constructor( private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // this.newJobForm = this.formBuilder.group({
    //   role : new FormControl('', [Validators.required])
    // });
    
  }

}
