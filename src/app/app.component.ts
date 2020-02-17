import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Service/login.service';
import { CUser } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdelmardesign';
  currentUser: CUser;

  constructor(private router:Router, private loginService: LoginService){

    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }



}
