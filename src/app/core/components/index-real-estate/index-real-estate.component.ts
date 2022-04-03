import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-index-real-estate',
  templateUrl: './index-real-estate.component.html',
  styleUrls: ['./index-real-estate.component.css']
})

/***
 * Real Estate Component
 */
export class IndexRealEstateComponent implements OnInit {

  /***
   * Nav Bg Light Class Add
   */
  navClass = 'nav-light';
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false
  };

  /***
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
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
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false,
  };

  /**
   * Review Testimonial Data
   */
  reviewData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel ",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The advantage of its Latin origin and the relative meaninglessness
      of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention
      from the layout. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" There is now an abundance of readable dummy texts. These are
      usually used when a text is required purely to fill a space. These alternatives to the classic Lorem
      Ipsum texts are often amusing and tell short, funny or nonsensical stories. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text
      composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
      all the instances of the unusual word 'consectetur' he could find "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have
      originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added
      or deleted at various positions within the text. "`
    }
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Design love your own way",
      like: "44",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "https://images.unsplash.com/photo-1517330283827-2527c57981ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "How apps changed the connections world",
      like: "88",
      message: "22",
      name: "Calvin Carlo",
      date: "13th April, 2022"
    },
    {
      image: "https://images.unsplash.com/photo-1648737965255-e1e6f33f0937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Socially accepting everyone",
      like: "33",
      message: "666",
      name: "Joel's a Bitch",
      date: "13th August, 2022"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
