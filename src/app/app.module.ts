import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OptionComponent } from './option/option.component';
import { DataService } from './data.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { AddparticipantComponent } from './addparticipant/addparticipant.component';
import { FeatureService } from '../common/services';


@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    LoginComponent,
    SignupComponent,
    OptionComponent,
    AppHeaderComponent,
    HomeComponent,
    MaincomponentComponent,
    DateTimeComponent,
    AddDetailComponent,
    AddparticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ DataService, FeatureService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
