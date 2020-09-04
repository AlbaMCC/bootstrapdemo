import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  peliculas:any[]=[
    {name:'Frozen 2',
    img:'assets/img/frozen2.jpeg',
    desc:'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
