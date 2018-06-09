import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  question: string;
  optionText: String;
  options: String[] = [];
  optionCount: Number = 0;

  constructor(private router: Router, private data: DataService) {}

  ngOnInit() {
    this.data.currentQuestion.subscribe(question => this.question = question);
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

  setDateTime() {
    this.data.changeText('Polling Ends On:');
    this.data.changeView('dateView');
    this.router.navigateByUrl('/maincomponent');
  }

}


