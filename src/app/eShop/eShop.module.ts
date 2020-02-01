import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { eHomeComponent } from './eHome/eHome.component';



@NgModule({
  declarations: [HomeComponent, eHomeComponent],
  imports: [
    CommonModule
  ]
})
export class EShopModule { }
