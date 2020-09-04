import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {


  peliculas:any[]=[
    {name:'Frozen 2',
    img:'assets/img/frozen.jpg',
    desc:'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.'
  },
    {
      name:'The Irishman',
      img:'assets/img/irishman.jpg',
      desc:'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.'
    }
  ];

  constructor(private config:NgbCarouselConfig) { 
   /* para dar animación al carousel y se quita la parte de flechas laterales;
    config.interval = 3000;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;*/

  }

  ngOnInit(): void {
  }

}

