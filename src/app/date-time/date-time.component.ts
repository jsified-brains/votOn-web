import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {

  model;
  time = {hour: 13, minute: 30};
  meridian = true;


  toggleMeridian() {
      this.meridian = !this.meridian;
  }


  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  addDetails() {
    this.data.changeText("Your (Poll Admin's) Details:");
    this.data.changeView('addDetailView');
    this.router.navigateByUrl('/maincomponent');
  }

  addParticipants() {
    this.data.changeText('Add Poll Participants:');
    this.data.changeView('addParticipantView');
    this.router.navigateByUrl('/maincomponent');
  }

}
