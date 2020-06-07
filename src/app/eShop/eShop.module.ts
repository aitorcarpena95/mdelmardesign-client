import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { eHomeComponent } from './eHome/eHome.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './User/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './User/register/register.component';
import { CartComponent } from './cart/cart.component';
import { AlertComponent } from '../Components/alert/alert.component';
import { ListComponent } from './User/list/list.component';
import { ProdCatComponent } from './prod-cat/prod-cat.component';
import { OrdersComponent } from './User/orders/orders.component';
import { ProductComponent } from './product/product.component';
import { MatInputModule } from '@angular/material';
import { ProductListComponent } from './product/product-list/product-list.component';






@NgModule({
  declarations: [
    HomeComponent,
    eHomeComponent,
    SearchBarComponent,
    MatCardModule, LoginComponent, MatPaginatorModule, ReactiveFormsModule, BrowserModule, RegisterComponent, CartComponent, AlertComponent, ListComponent, ProdCatComponent, OrdersComponent, ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,

  ]
})
export class EShopModule { }


