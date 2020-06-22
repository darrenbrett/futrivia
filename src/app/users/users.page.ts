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

  async getUsers() {
    const userStr = localStorage.getItem('currentUser');
    const user = JSON.parse(userStr);
    console.log('user.username: ', user.username);
    this.users = await this.usersService.getUsers(user.username);
  }

  ngOnInit() {
    this.getUsers();
  }
}
