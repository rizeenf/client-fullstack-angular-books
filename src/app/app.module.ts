import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HeaderModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
