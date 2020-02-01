import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shopHome.component.html',
  styleUrls: ['./shopHome.component.scss']
})
export class ShopHomeComponent implements OnInit {


  ngOnInit() {
  }

  constructor(private router:Router){}

  public eShop() {
    this.router.navigate(['/eShop']);
  }

}
