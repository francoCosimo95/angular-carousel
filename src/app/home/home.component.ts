import {Component, OnInit} from '@angular/core';
import {CarouselItem} from '../carousel/carousel-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselItems: CarouselItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.carouselItems = [{
      src: '/assets/img/natura.jpg',
      alt: 'Natura',
      title: 'First item',
      description: 'what a desert'
    }, {
      src: '/assets/img/fiume.jpeg',
      alt: 'Fiume',
      title: 'Title <i>only</i>',
    }, {
      src: '/assets/img/girasoli.jpg',
      alt: 'Girasoli',
      description: 'Description only.<br>This interval is custom to <b>6s</b>',
      interval: 6000
    }, {
      src: '/assets/img/panchina.jpeg',
      alt: 'Panchina',
    }];
  }

}
