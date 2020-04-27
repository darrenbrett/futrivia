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
  isLoading = false;
  failedLogin = false;

  async onLogin(form: NgForm) {
    this.isLoading = true;
    const username = form.value.email;
    const password = form.value.password;
    const body = {
      username,
      password
    };
    const response = await this.authService.login(body);
    if (response === 'Login failed') {
      this.failedLogin = true;
      this.isLoading = false;
    }
    form.reset();
    this.isLoading = false;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    // Send login request
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit() {
  }

}
