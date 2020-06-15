import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-receiver-signup',
  templateUrl: './receiver-signup.component.html',
  styleUrls: ['./receiver-signup.component.scss']
})
export class ReceiverSignupComponent implements OnInit {

  constructor() { }
  //[Validators.required , Validators.pattern(/^([a-zA-Z]+[..]?[]?[a-z]+['-]?)+$/)]

  // [Validators.required , Validators.pattern(/^(002)?(010 | 0100 | 012 | 015)[0-9]{8}$/

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



// $(function(){
// 	$.validator.setDefaults({
// 		highlight: function(element){
// 			$(element)
// 			.closest('.form-group')
// 			.addClass('has-error')
// 		},
// 		unhighlight: function(element){
// 			$(element)
// 			.closest('.form-group')
// 			.removeClass('has-error')
// 		}
// 	});

// 	$.validate({
// 		rules:
// 		{
// 		    password: "required",
// 			birthDate: "required",
// 			weight: {
// 			    required:true,
// 			    number:true
// 			},
// 			height:  {
// 			    required:true,
// 			    number:true
// 			},
// 			email: {
// 				required: true,
// 				email: true
// 			}
// 		},
// 			messages:{
// 				email: {
// 				required: true,
// 				email: true
// 			}
// 		},
// 				password: {
// 					required: " Please enter password"
// 				},
// 				birthDate: {
// 					required: " Please enter birthdate"
// 				},
// 				email: {
// 					required: ' Please enter email',
// 					email: ' Please enter valid email'
// 				},
// 				weight: {
// 					required: " Please enter your weight",
// 					number: " Only numbers allowed"
// 				},
// 				height: {
// 					required: " Please enter your height",
// 					number: " Only numbers allowed"
// 				},
// 			}

// 	});
// });
