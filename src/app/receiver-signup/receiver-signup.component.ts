import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-receiver-signup',
  templateUrl: './receiver-signup.component.html',
  styleUrls: ['./receiver-signup.component.scss']
})
export class ReceiverSignupComponent implements OnInit {

  constructor() { }


  signUp = new FormGroup({
    full_name : new FormControl('', [  Validators.required , Validators.pattern(/^([a-zA-Z]+[..]?[]?[a-z]+['-]?)+$/)]),
    email : new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('', Validators.required),
    age: new FormControl('' , Validators.required),
    mobile: new FormControl('' , Validators.required),
    confirm_pass : new FormControl('' , Validators.required),
    Blood_type : new FormControl ('' , Validators.required)
  });
  FormSignUp()
  {
    console.log(this.signUp);
  }

  ngOnInit(): void {
  }
  
}


