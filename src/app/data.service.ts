import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    private questionText = new BehaviorSubject<string>('');
    currentQuestion = this.questionText.asObservable();

    private viewNow = new BehaviorSubject<string>('');
    currentView = this.viewNow.asObservable();

    private Text = new BehaviorSubject<string>('');
    currentText = this.Text.asObservable();

    constructor() { }

    changeQuestion(question: string) {
      this.questionText.next(question);
    }

    changeView(view: string) {
      this.viewNow.next(view);
    }

    changeText(mainText: string) {
      this.Text.next(mainText);
    }
}
