import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PollComponent } from './poll/poll.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OptionComponent } from './option/option.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'poll',
    component: PollComponent
  },
  {
    path: 'maincomponent',
    component: MaincomponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'option',
    component: OptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
