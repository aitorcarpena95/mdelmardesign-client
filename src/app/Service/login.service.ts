import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, config } from 'rxjs';
import { CUser } from '../_models/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private currentUserSubject: BehaviorSubject<CUser>;
  public currentUser: Observable<CUser>;

  private API_SERVER: string ="http://localhost:8082/"

  constructor(private http: HttpClient, private router: Router) {

    this.currentUserSubject = new BehaviorSubject<CUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

public get currentUserValue(): CUser {
    return this.currentUserSubject.value;
}

login(username: string, password: string) {
  return this.http.post<any>(`${this.API_SERVER}session/`, { username, password })
  .pipe(map(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    //this.currentUserSubject.next(user);
    return user;
}));
}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    //this.currentUserSubject.next(null);
}

}

