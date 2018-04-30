import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.scss']
})
export class MaincomponentComponent implements OnInit {

  view: string;
  mainText: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentView.subscribe(view => this.view = view);
    this.data.currentText.subscribe(mainText => this.mainText = mainText);
  }

}
