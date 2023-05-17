import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login Form';

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  get username() {
    return this.loginForm.get('username');
  }

  login() {
    console.log(this.loginForm.value);
  }
}
