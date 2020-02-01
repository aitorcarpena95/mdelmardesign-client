import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShopHomeComponent } from './shopHome/shopHome.component';
import { AboutComponent } from './about/about.component';
import { eHomeComponent } from './eShop/eHome/eHome.component'







@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PortfolioComponent,
    ShopHomeComponent,
    AboutComponent,
    eHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgScrollbarModule,
    MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
