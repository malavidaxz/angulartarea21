import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    NavComponent
  ]
})
export class PrincipalModule { }
