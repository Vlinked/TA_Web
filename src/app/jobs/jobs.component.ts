import { Component, OnInit } from '@angular/core';

export interface Jobs {
  id: string,
  designation: string,
  experience: string,
  ctc: string,
  positions: string,
  responsibilities: string
}
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  isEdit: boolean;
  jobs: Jobs[] = [
    {id: '1', designation: 'FullStack developer', experience: '3 years', ctc: '5,00,000', positions: '2', responsibilities: 'FullStack developer'},
    {id: '2', designation: 'Software developer', experience: '2 years', ctc: '3,00,000', positions: '4', responsibilities: 'Software developer'},
    {id: '3', designation: 'Android developer', experience: '4 years', ctc: '7,00,000', positions: '1', responsibilities: 'Android developer'},
    {id: '4', designation: 'Software Engineer', experience: '1 year', ctc: '2,00,000', positions: '2', responsibilities: 'Software Engineer'},
  ]
  constructor() { }

  ngOnInit() {
    this.isEdit = false;
  }

  editClicked(id) {
    console.log(id);
    this.isEdit = true;
  }

}
