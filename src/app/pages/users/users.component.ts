import { Component, OnInit } from '@angular/core';
import {UserService} from '../../App_Services/DataServices/User/user.service';
import { first } from 'rxjs/operators';
import { User } from '../../ModelsTypesAndEnums/Models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
