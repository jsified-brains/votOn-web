import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})

export class PollComponent implements OnInit {

  createView: string;
  mainText: string;
  polls = [
    {
      'featureText': 'where to meet',
      'icon': 'meeting.png'
    },
    {
      'featureText': 'which movie to go',
      'icon': 'cinemaPopcorn.png'
    },
    {
      'featureText': 'which one should I buy',
      'icon': 'pick.png'
    },
    {
      'featureText': 'what to cook for dinner',
      'icon': 'dinner-icon.png'
    },
    {
      'featureText': 'where to plan our next vacation',
      'icon': 'beach.png'
    },
    {
      'featureText': 'create a new poll from scratch',
      'icon': 'poll.png'
    }
  ];

  constructor(private router: Router, private data: DataService) {}

  ngOnInit() {}

  openOption(option) {
    if (option === 'poll.png') {
      this.data.changeText('Add Options');
      this.data.changeView('optionView');
      this.router.navigateByUrl('/maincomponent');
    }
  }
}
