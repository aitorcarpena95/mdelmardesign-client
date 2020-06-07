import { Component, OnInit } from '@angular/core';
import { EShopService } from 'src/app/Service/e-shop.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productID: any;
  productData: any;
  dataSource: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _eShopService: EShopService
  ) { }

  ngOnInit() {
    this. productID = this._route.snapshot.params['id'];
    this.dataSource = this.loadProductData(this.productID);
  }

  loadProductData(productID){
    this._eShopService.getProduct(productID).subscribe(product => {
      this.productData= product;
    });
  }

  goBack() {
    this._router.navigate(['/eShop']);
  }

}
