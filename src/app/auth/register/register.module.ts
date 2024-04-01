import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AuthModule } from '../auth.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class RegisterModule { }
