import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  registerForm = new FormGroup({
    user: new FormControl(),
    password: new FormControl(),
    password2: new FormControl(),
    email: new FormControl(),
}); 

}
