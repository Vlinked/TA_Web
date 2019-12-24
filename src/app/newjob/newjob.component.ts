import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

export interface Designation {
  id: string;
  value: string;
}
@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})


export class NewjobComponent implements OnInit {
  designations: Designation[] = [
    {id: '1', value: 'Software Developer'},
    {id: '2', value: 'Software Engineer'},
    {id: '3', value: 'Android Developer'}
  ];
  newJobForm: any;
  constructor( private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newJobForm = this.formBuilder.group({
      designation : new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      ctc: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      skillset: new FormControl('', Validators.required),
      positions: new FormControl('', Validators.required),
      jobtype: new FormControl('', Validators.required),
      noticeperiod: new FormControl('', Validators.required),
      jobdescription: new FormControl('', Validators.required)
    });  
  }

  newJobPost() {
    var newJobObj = {
      designation: this.newJobForm.value.designation,
      experience: this.newJobForm.value.experience,
      ctc: this.newJobForm.value.ctc,
      qualification: this.newJobForm.value.qualification,
      skillset: this.newJobForm.value.skillset,
      positions: this.newJobForm.value.positions,
      jobtype: this.newJobForm.value.jobtype,
      noticeperiod: this.newJobForm.value.noticeperiod,
      jobdescription: this.newJobForm.value.jobdescription
    }
    console.log(newJobObj);
  }
}
