import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { EShopService } from 'src/app/Service/e-shop.service';
import { Router } from '@angular/router';
import { IProducts } from '../../eHome/products';

@Component({
  selector: 'app-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  constructor(
    private _eShopService: EShopService,
    private router: Router
  ) { }

  displayedColumns: String[] = ['sku', 'name', 'stock', 'price', 'image', 'description', 'tags', 'product_category_id', 'actions'];
public products = [];
dataSource: MatTableDataSource<IProducts>;

@ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
@ViewChild(MatSort, {static:false}) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getData();
    this.dataSource.paginator = this.paginator;

  }

  getData() {
    this._eShopService.getAllProducts().subscribe(data => {
      console.log(data);
      console.log('Laps');
      this.dataSource.data = data;
      return data;
    })
  }



onNavigate(productCode){
console.log(`product code ${productCode}`)
}

goEdit() {
  this.router.navigate(['/eShop/User/Edit'])
}

goDelete() {
  this.router.navigate(['/eShop/User/Delete'])
}

addRegister() {
  this.router.navigate(['/eShop/User/Add'])
}

filterProduct(value: string):void{
  this.dataSource.filter = value.trim().toLowerCase();

}

}

