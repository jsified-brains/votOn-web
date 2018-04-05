import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollComponent } from './poll/poll.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/poll',
    pathMatch: 'full'
  },
  {
    path: 'poll',
    component: PollComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
