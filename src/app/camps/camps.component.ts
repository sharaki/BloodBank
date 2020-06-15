import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss']
})
export class CampsComponent implements OnInit {
  
  constructor() { }
  myMethod(){
    
  }
  ngOnInit() {
    $(document).ready(function() {
  
      var stack1 = $('#stack1');
      
      stack1.removeClass('start');
      
      stack1.hammer().on('tap', function(event) {
        stack1.addClass('hover');
        event.stopPropagation();
      });
      
      
      $(document).hammer().on('tap', function(event) {
        stack1.removeClass('hover');
        $('.card').removeClass('hover');
      });
      
      $('.card').hammer().on('tap', function(event) {
          $('.card').removeClass('hover');
          $(this).addClass('hover');
      });
    });
    function closeForm() {
      $('.form-popup-bg').removeClass('is-visible');
    }
    
    $(document).ready(function($) {
      
      /* Contact Form Interactions */
      $('#btnOpenForm1').on('click', function(event) {
        event.preventDefault();
    
        $('.form-popup-bg1').addClass('is-visible');
      });
      
        //close popup when clicking x or off popup
      $('.form-popup-bg1').on('click', function(event) {
        if ($(event.target).is('.form-popup-bg1') || $(event.target).is('#btnCloseForm')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      /* Contact Form Interactions */
      $('#btnOpenForm2').on('click', function(event) {
        event.preventDefault();
    
        $('.form-popup-bg2').addClass('is-visible');
      });
      
        //close popup when clicking x or off popup
      $('.form-popup-bg2').on('click', function(event) {
        if ($(event.target).is('.form-popup-bg2') || $(event.target).is('#btnCloseForm')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      /* Contact Form Interactions */
      $('#btnOpenForm3').on('click', function(event) {
        event.preventDefault();
    
        $('.form-popup-bg3').addClass('is-visible');
      });
      
        //close popup when clicking x or off popup
      $('.form-popup-bg3').on('click', function(event) {
        if ($(event.target).is('.form-popup-bg3') || $(event.target).is('#btnCloseForm')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      
      
      $('.bxslider').bxSlider({
        autoHover: true,
        auto: true,
        slideWidth: 250,
        minSlides: 2,
        maxSlides: 6,
        controls: true,
        pager: true,
        speed: 500,
        captions: true,
        slideMargin: 5,
      });
      
      });
    
  }
}