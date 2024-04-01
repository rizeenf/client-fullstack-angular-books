import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleSubmitLogin({ email, password }: { email: string; password: string }) {
    console.log('login');
    console.log({ email, password });
  }
}
