import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addparticipant',
  templateUrl: './addparticipant.component.html',
  styleUrls: ['./addparticipant.component.scss']
})
export class AddparticipantComponent implements OnInit {

  @ViewChild('basicModal') public myModal;
  name: String;
  email: String;
  participants: String[] = [];
  participantCount: Number = 0;
  constructor() { }

  ngOnInit() {
  }

  addParticipant() {
    this.participants.push(this.name);
    // this.participants.push(this.email);
    this.name = '';
    this.email = '';
    this.participantCount = this.participants.length;
    this.myModal.hide();
  }

  deleteParticipant(participant: String) {
    this.participantCount = this.participants.length - 1;
    this.participants.splice(this.participants.indexOf(participant), 1);
  }
}
