import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-bg-home',
  templateUrl: './bg-home.component.html',
  styleUrls: ['./bg-home.component.scss']
})
export class BgHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
    
    var typed2 = new Typed('#typed2', {
      strings: ['Anybody can give blood', 'Spare only 15 minutes and save a life', 'A single pint can save three lives'],
      typeSpeed: 0,
      backSpeed: 0,
      fadeOut: true,
      loop: true,
      backDelay:2000
    });
    
  }

}
