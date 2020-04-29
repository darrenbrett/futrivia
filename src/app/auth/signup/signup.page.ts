import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss', './../auth.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  onSignUp() {
    console.log('onSignUp clicked...');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    // Send sign-up request

    // login and redirect
  }

  ngOnInit() {
  }

}
