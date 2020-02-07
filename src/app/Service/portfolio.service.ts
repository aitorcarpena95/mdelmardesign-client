import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjects } from '../portfolio/projects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http: HttpClient) { }


private API_SERVER: string ="http://localhost:8082/project/getall"

getProjects(): Observable<IProjects[]> {
  return this.http.get<IProjects[]>(this.API_SERVER);
}
}