import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private usersService: UsersService) { }

  users: [];
  errorMsg: string;

  getUsers() {
    const userStr = localStorage.getItem('currentUser');
    const user = JSON.parse(userStr);
    this.usersService.getUsers(user.username).subscribe(
      users => this.users = users,
      error => this.errorMsg = error
    );
  }

  ngOnInit() {
    this.getUsers();
  }
}
