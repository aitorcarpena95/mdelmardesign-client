import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts, IProdCat } from '../eShop/eHome/products';
import { Observable } from 'rxjs';
import { CartService, BaseCartItem } from 'ng-shopping-cart';
import { IUsers } from '../eShop/User/list/users';

@Injectable({
  providedIn: 'root'
})
export class EShopService {

  constructor(
    private http: HttpClient,
    private cartService: CartService<BaseCartItem>) { }


private API_SERVER_ALL: string ="http://localhost:8082/product/getall"

getAllProducts(): Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this.API_SERVER_ALL);
}

private API_SERVER_ALLUSERS: string="http://localhost:8082/user/getall"

getAllUsers(): Observable<IUsers[]> {
  return this.http.get<IUsers[]>(this.API_SERVER_ALLUSERS);
}

private API_SERVER_PAGE: string ="http://localhost:8082/product/getpage/0/10"

getPageProducts(): Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this.API_SERVER_ALL);
}

private API_SERVER_PRODCAT: string ="http://localhost:8082/product_category/getall"

getAllProdCat(): Observable<IProdCat[]> {
  return this.http.get<IProdCat[]>(this.API_SERVER_PRODCAT);
}

private API_SERVER_PRODUCT: string="http://localhost:8082/product/"

getProduct(id): Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this.API_SERVER_PRODUCT + id);
}

getDataByFilter(name: string): Observable<IProducts[]>{
  return this.http.get<IProducts[]>(this.API_SERVER_ALL);
}

}
