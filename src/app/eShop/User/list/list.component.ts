import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { EShopService } from 'src/app/Service/e-shop.service';
import { IUsers } from './users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(
    private _eShopService: EShopService,
    private router: Router
  ) { }

  displayedColumns: String[] = ['name', 'surname1', 'surname2', 'username', 'email', 'user_type_id', 'actions'];
public users = [];
dataSource: MatTableDataSource<IUsers>;

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
    this._eShopService.getAllUsers().subscribe(data => {
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
/*
filterProduct(value: string):void{
    this.dataSource.filter = value.trim().toLowerCase();
 this.userService.getDataByFilter(value).subscribe(response =>
 {
   this.dataSource= response['users'];

 });
  }
  */
}
