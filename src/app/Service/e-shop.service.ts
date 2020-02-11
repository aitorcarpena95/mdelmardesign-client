import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../eShop/eHome/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EShopService {

  constructor(private http: HttpClient) { }


private API_SERVER: string ="http://localhost:8082/product/getall"

getProducts(): Observable<IProducts[]> {
  return this.http.get<IProducts[]>(this.API_SERVER);
}
}
