import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  questionText: String;
  optionText: String;
  options: String[] = [];
  optionCount: Number = 0;
  optionView: boolean;
  questionView: boolean;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.optionView = false;
    this.questionView = true;
  }

  postQuestion() {
    this.optionView = true;
    this.questionView = false;
  }

  addOption() {
    this.options.push(this.optionText);
    this.optionText = '';
    this.optionCount = this.options.length;
  }

  deleteOption(option: String) {
    this.optionCount = this.options.length - 1;
    this.options.splice(this.options.indexOf(option), 1);
  }
}
