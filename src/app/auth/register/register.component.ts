import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleSubmitRegister({email,password}: { email: string; password: string }) {
    console.log(email);
    console.log(password);
  }
}
