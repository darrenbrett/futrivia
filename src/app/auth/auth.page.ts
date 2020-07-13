import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  isLogin = true;
  isLoading = false;
  failedLogin = false;
  creds;

  async onLogin(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    const creds = {
      email,
      password
    };
    const response = await this.authService.login(creds);
    if (response === 'Login failed') {
      this.failedLogin = true;
      this.isLoading = false;
    }
    form.reset();
    this.isLoading = false;
  }

  onReturnKeydown(event: any, form: NgForm) {
    if (event.key === 'Enter') {
      this.onLogin(form);
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit() {
    this.creds = this.router.getCurrentNavigation().extras.state;
  }

}
