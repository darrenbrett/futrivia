import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService) { }

  isLogin = true;

  onLogin() {
    console.log('onLogin clicked...');
    this.authService.login();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // send login request
    } else {
      // send signup request
    }

  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit() {
  }

}
