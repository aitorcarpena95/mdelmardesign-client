import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShopHomeComponent } from './shopHome/shopHome.component';
import { AboutComponent } from './about/about.component';
import { eHomeComponent } from './eShop/eHome/eHome.component';
import { NavbarComponent } from './Components/navbar/navbar.component'
import { LoginComponent } from './eShop/User/login/login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ShopNavbarComponent } from './Components/shop-navbar/shop-navbar.component';
import { MatFormFieldModule, MatSelectModule, MatButtonModule, MatBottomSheetModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { RegisterComponent } from './eShop/User/register/register.component';
import { AlertComponent } from './Components/alert/alert.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ProfileComponent } from './eShop/User/profile/profile.component';
import { ListComponent } from './eShop/User/list/list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProjectComponent } from './portfolio/project/project.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProdCatComponent } from './eShop/prod-cat/prod-cat.component';
import { OrdersComponent } from './eShop/User/orders/orders.component';
import {MatListModule} from '@angular/material/list';
import { ProductComponent } from './eShop/product/product.component';
import {ShoppingCartModule} from 'ng-shopping-cart';
import { CartComponent } from './eShop/cart/cart.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductListComponent } from './eShop/product/product-list/product-list.component';









const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PortfolioComponent,
    ProjectComponent,
    ShopHomeComponent,
    AboutComponent,
    eHomeComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    ShopNavbarComponent,
    RegisterComponent,
    AlertComponent,
    ProfileComponent,
    ListComponent,
    ProductListComponent,
    CarouselComponent,
    ProdCatComponent,
    OrdersComponent,
    ProductComponent,
    CartComponent,



  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressBarModule,
    PerfectScrollbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    NgxPaginationModule,
    MatButtonModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatListModule,
    ShoppingCartModule.forRoot({
      serviceType: 'localStorage',
      serviceOptions: {
        storageKey: 'NgShoppingCart',
        clearOnError: true
      }
    }),
    MatBottomSheetModule,
    FormsModule,
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,





  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
