import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjects } from '../portfolio/projects';
import { Observable } from 'rxjs';
import { ProjectComponent } from '../portfolio/project/project.component';


@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http: HttpClient) { }

private API_SERVER_ALL: string ="http://localhost:8082/project/getpage/"
private API_SERVER: string="http://localhost:8082/project/"

getProjects(page,rpp): Observable<IProjects[]> {
  return this.http.get<IProjects[]>(this.API_SERVER_ALL + page + '/' + rpp);
}

getProjectDetails(id): Observable<IProjects[]> {
  return this.http.get<IProjects[]>(this.API_SERVER + id);
}


}
