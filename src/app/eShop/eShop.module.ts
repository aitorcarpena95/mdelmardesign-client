import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { eHomeComponent } from './eHome/eHome.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './User/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './User/register/register.component';
import { CartComponent } from './cart/cart.component';
import { AlertComponent } from '../Components/alert/alert.component';
import { ListComponent } from './User/list/list.component';





@NgModule({
  declarations: [
    HomeComponent,
    eHomeComponent,
    SearchBarComponent,
    MatCardModule, LoginComponent, MatPaginatorModule, ReactiveFormsModule, BrowserModule, RegisterComponent, CartComponent, AlertComponent, ListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,

  ]
})
export class EShopModule { }


