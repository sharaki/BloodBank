import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})


export class MyServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /********** to close modal donate****** */
    $("#closeDonner").click(function(){
      $(".donner").css("display","none")

    })
    /********** to open modal donate************ */
    $("#btnDonate").click(function(){
      $(".donner").css("display","block")

    })

     /********** to open moda recieve****** */

     $("#btnRecieve").click(function(){
      $(".userRecieve").css("display","block")


    })
    /********** to close modal recieve************ */

    $("#closeRecieve").click(function(){
      $("#userRecieve").css("display","none")

    })


  }

}
