import {Injectable} from '@angular/core';
import {CarouselItem} from '../carousel/carousel-item';

@Injectable()
export class HomeService {

  /**
   * it is the list of carousel items
   */
  private carouselItems: CarouselItem[];

  constructor() {
    this.carouselItems = [{
      src: '/assets/img/natura.jpg',
      alt: 'Natura',
      title: 'First item',
      description: 'what a desert'
    }, {
      src: '/assets/img/fiume.jpeg',
      alt: 'Fiume',
      title: 'Title only',
    }, {
      src: '/assets/img/girasoli.jpg',
      alt: 'Girasoli',
      description: 'Description only.<br>This interval is custom to <b>3s</b>',
      interval: 3000
    }, {
      src: '/assets/img/panchina.jpeg',
      alt: 'Panchina',
    }];
  }

  /**
   * get the carousel items
   */
  getCarouselItems(): CarouselItem[] {
    return this.carouselItems;
  }
}
