import { Component, OnInit } from '@angular/core';
import { CUser } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.scss'],
})
export class ShopNavbarComponent implements OnInit {

  currentUser: CUser;

  ngOnInit() {
  }

  constructor(private router:Router, private loginService: LoginService){

    this.loginService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.loginService.currentUserValue;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['eShop/Login']);
}

}
