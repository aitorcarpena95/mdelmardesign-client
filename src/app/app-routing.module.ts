import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopHomeComponent } from './shopHome/shopHome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { eHomeComponent } from './eShop/eHome/eHome.component';
import { LoginComponent } from './eShop/login/login.component';
import { RegisterComponent } from './eShop/register/register.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Shop', component:ShopHomeComponent},
  {path:'Portfolio', component:PortfolioComponent},
  {path:'About', component:AboutComponent},
  {path:'eShop', component:eHomeComponent},
  {path: 'eShop/Login', component: LoginComponent},
  {path: 'eShop/Register', component: RegisterComponent},


  
/*
  path: 'Portfolio',
  loadChildren: () => import('./Portfolio/portfolio.module').then(mod => mod.CrisisCenterModule),
  data: { preload: true }
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopHomeComponent, PortfolioComponent, HomeComponent, AboutComponent, eHomeComponent, LoginComponent, RegisterComponent]