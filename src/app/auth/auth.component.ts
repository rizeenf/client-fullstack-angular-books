import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter<any>();
  @Input() submitLabel: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor() {}

  ngOnInit(): void {}

  getEmailErrorMsg() {
    if (this.email.hasError('required')) {
      return 'Please specify your email.';
    }

    return this.email.hasError('email') ? 'Input must be email format.' : '';
  }

  getPasswdErrorMsg() {
    if (this.password.hasError('required')) {
      return 'Please fill your password.';
    }

    if (this.password.hasError('minlength')) {
      return 'Password must be greater than 6';
    }

    return '';
  }

  onSubmit() {
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value,
    });
  }
}
