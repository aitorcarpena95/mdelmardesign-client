import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import {MatGridListModule} from '@angular/material/grid-list';






@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    MatGridListModule,
  ],

})
export class PortfolioModule { }
