import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



declare var $:any;

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})


export class MyServicesComponent implements OnInit {
  
  
  constructor( ) {
    let httpReq = new XMLHttpRequest();
    let results=[];
    httpReq.open('GET','https://jsonplaceholder.typicode.com/posts/1/comments')
    httpReq.send();
    httpReq.addEventListener('readystatechange', function(){
      if(httpReq.readyState == 4 && httpReq.status == 200)
      {
         results = JSON.parse(httpReq.response);
        
      }
      displayData();
    })
    function displayData()
    {
      let temp = ``;
      for(let i=0 ; i<results.length ; i++)
      {
        temp += `<div class="card col-md-3 " style="width: 16rem;  color: black;">
        
        <div class="card-body">
          <h5 class="card-title">`+results[i].name+`</h5>
          <p class="card-text">`+results[i].email+`</p>
          <p class="card-text">`+results[i].body+`</p>
          <p class="card-text">`+results[i].zip_code+`</p>
          <p class="card-text">`+results[i].updated_dt+`</p>
        </div>
      </div>`
      }
      document.getElementById("test").innerHTML=temp;
      document.getElementById("tests").innerHTML=temp;
    }
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




// constructor( private _HttpClient:HttpClient ) {
//   this.fetchData();
//  }


// fetchData()
// {
//   return this._HttpClient.get('http://www.communitybenefitinsight.org/api/get_hospital_systems.php?state=NC').subscribe(response =>{
//     console.log(response)
//   })
// }
