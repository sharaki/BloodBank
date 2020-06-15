import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  signIn = new FormGroup({
    email : new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('', Validators.required)
  })
  FormSignIn()
  {
    console.log(this.signIn);
  }

  ngOnInit(): void {


  }




}
