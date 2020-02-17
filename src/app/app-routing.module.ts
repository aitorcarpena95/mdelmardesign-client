import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopHomeComponent } from './shopHome/shopHome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { eHomeComponent } from './eShop/eHome/eHome.component';
import { LoginComponent } from './eShop/User/login/login.component';
import { RegisterComponent } from './eShop/User/register/register.component';
import { ProfileComponent } from './eShop/User/profile/profile.component';
import { ListComponent } from './eShop/User/list/list.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Shop', component:ShopHomeComponent},
  {path:'Portfolio', component:PortfolioComponent},
  {path:'About', component:AboutComponent},
  {path:'eShop', component:eHomeComponent},
  {path: 'eShop/Login', component: LoginComponent},
  {path: 'eShop/Register', component: RegisterComponent},
  {path: 'eShop/User/:id', component: ProfileComponent},
  {path: 'eShop/UserList', component: ListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopHomeComponent, PortfolioComponent, HomeComponent, AboutComponent, eHomeComponent, LoginComponent, RegisterComponent]