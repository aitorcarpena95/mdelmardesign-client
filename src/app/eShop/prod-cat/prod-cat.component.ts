import { Component, OnInit, ViewChild } from '@angular/core';
import { EShopService } from 'src/app/Service/e-shop.service';
import { MatSelectionList, MatListOption } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-prod-cat',
  templateUrl: './prod-cat.component.html',
  styleUrls: ['./prod-cat.component.scss']
})
export class ProdCatComponent implements OnInit {

  public categories = [];

  @ViewChild(MatSelectionList, {static: true})
private selectionList: MatSelectionList;

  constructor(
    private _eShopService: EShopService,
  ) { }

  ngOnInit() {
        //data from projects
        this._eShopService.getAllProdCat()
        .subscribe(
          data => this.categories = data,

          );

          this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
  }

}
