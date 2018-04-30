import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    {
      'featureText': 'easily create poll',
      'icon': 'poll.png'
    },
    {
      'featureText': 'send to friends',
      'icon': 'share.png'
    },
    {
      'featureText': 'real time results',
      'icon': 'realtime.png'
    },
    {
      'featureText': 'faster decisions',
      'icon': 'faster.png'
    },
    {
      'featureText': 'signin to save and reuse poll',
      'icon': 'signin.png'
    }
  ];

  createView: string;
  mainText: string;

  constructor( private router: Router, private data: DataService) { }

  ngOnInit() {}

  poll() {
    this.createView = 'createView';
    this.mainText = 'Create A Poll';
    this.data.changeText(this.mainText);
    this.data.changeView(this.createView);
    this.router.navigateByUrl('/maincomponent');
  }

}
