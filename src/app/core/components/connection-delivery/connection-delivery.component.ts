import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-connection-delivery',
  templateUrl: './connection-delivery.component.html',
  styleUrls: ['./connection-delivery.component.css']
})

/**
 * Car Riding Component
 */
export class ConnectionDeliveryComponent implements OnInit {

  constructor() { }

  /**
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };

  ngOnInit(): void {
  }


}
