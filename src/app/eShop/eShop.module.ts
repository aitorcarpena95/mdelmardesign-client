import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { eHomeComponent } from './eHome/eHome.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [HomeComponent, eHomeComponent, SearchBarComponent, MatCardModule, LoginComponent, MatPaginatorModule, ReactiveFormsModule, BrowserModule, RegisterComponent, CartComponent],
  imports: [
    CommonModule, 
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class EShopModule { }


