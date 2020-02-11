import { Component, OnInit } from '@angular/core';
import { EShopService } from '../../Service/e-shop.service';

@Component({
  selector: 'app-eHome',
  templateUrl: './eHome.component.html',
  styleUrls: ['./eHome.component.scss']
})
export class eHomeComponent implements OnInit {
  
  public products = [];

  constructor(private _eShopService: EShopService) { }

  ngOnInit() {
    this._eShopService.getProducts()
    .subscribe(data => this.products = data);

  }

}
