import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss', './../auth.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  isLoading = false;
  failedSignUp = false;

  async onSignUp(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    const creds = {
      email,
      password
    };
    const response = await this.authService.signUp(creds);
    if (response === 'This email address already exists.') {
      this.isLoading = false;
      this.failedSignUp = true;
    } else {
      console.log('Signup successful!');
    }
    form.reset();
  }

  ngOnInit() {
  }

}
