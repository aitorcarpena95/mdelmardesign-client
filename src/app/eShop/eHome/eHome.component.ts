import { Component, OnInit, OnDestroy } from '@angular/core';
import { EShopService } from '../../Service/e-shop.service';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import {debounceTime, delay, tap, filter, map, takeUntil} from 'rxjs/operators';


import { IProducts } from './products';
import { CUser } from 'src/app/_models/user';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-eHome',
  templateUrl: './eHome.component.html',
  styleUrls: ['./eHome.component.scss']
})
export class eHomeComponent implements OnInit, OnDestroy {


  /** list of product */
  public products = [];
  currentUser: CUser;
  page=0;



  constructor(
    private _eShopService: EShopService,
    private loginService: LoginService,
    ) { }

  /** control for the selected product for server side filtering */
  public productServerSideCtrl: FormControl = new FormControl();

  /** control for filter for server side. */
  public productServerSideFilteringCtrl: FormControl = new FormControl();

  /** indicate search operation is in progress */
  public searching: boolean = false;

  /** list of product filtered after simulating server side search */
  public  filteredServerSideProducts: ReplaySubject<IProducts[]> = new ReplaySubject<IProducts[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  ngOnInit() {
    //data from projects
    this._eShopService.getAllProducts()
    .subscribe(
      data => this.products = data,

      );

    // listen for search field value changes
    this.productServerSideFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          if (!this.products) {
            return [];
          }

          // simulate server fetching and filtering data
          return this.products.filter(products => products.name.toLowerCase().indexOf(search) > -1);
        }),
        delay(500)
      )
      .subscribe(filteredProducts => {
        this.searching = false;
        this.filteredServerSideProducts.next(filteredProducts);
      },
        error => {
          // no errors in our simulated example
          this.searching = false;
          // handle error...
        });

  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
