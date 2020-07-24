import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private usersService: UsersService) { }

  users: Observable<User[]>;
  errorMsg: string;

  getUsers() {
    const userStr = localStorage.getItem('currentUser');
    const user = JSON.parse(userStr);
    this.users = this.usersService.getUsers(user.username);
  }

  ngOnInit() {
    this.getUsers();
  }
}
