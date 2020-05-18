import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../eShop/eHome/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EShopService {

  constructor(private http: HttpClient) { }


private API_SERVER_ALL: string ="http://localhost:8082/product/getall"

getAllProducts(): Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this.API_SERVER_ALL);
}

private API_SERVER_PAGE: string ="http://localhost:8082/product/getpage/0/10"

getPageProducts(): Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this.API_SERVER_ALL);
}
}
