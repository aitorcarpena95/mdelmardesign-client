import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectComponent } from './project/project.component';







@NgModule({
  declarations: [PortfolioComponent, ProjectComponent],
  imports: [
    CommonModule,
    MatGridListModule,

  ],

})
export class PortfolioModule { }
