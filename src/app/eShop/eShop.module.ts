import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { eHomeComponent } from './eHome/eHome.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, eHomeComponent, SearchBarComponent, MatCardModule, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class EShopModule { }
