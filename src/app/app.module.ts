import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


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
import { eHomeComponent } from './eShop/eHome/eHome.component';
import { NavbarComponent } from './Components/navbar/navbar.component'
import { LoginComponent } from './eShop/login/login.component';
import { FooterComponent } from './Components/footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PortfolioComponent,
    ShopHomeComponent,
    AboutComponent,
    eHomeComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
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
