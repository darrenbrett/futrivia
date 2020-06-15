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
    this.users = await this.usersService.getUsers();
  }

  ngOnInit() {
    this.getUsers();
  }
}
