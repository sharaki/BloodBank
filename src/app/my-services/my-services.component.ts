import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



declare var $:any;

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})


export class MyServicesComponent implements OnInit {

  constructor( private _HttpClient:HttpClient ) {
    this.fetchData();
   }


  fetchData()
  {
    return this._HttpClient.get('http://www.communitybenefitinsight.org/api/get_hospital_systems.php?state=NC').subscribe(response =>{
      console.log(response)
    })
  }

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
