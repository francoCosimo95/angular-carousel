import {Injectable} from '@angular/core';
import {CarouselItem} from '../carousel/carousel-item';
import {environment} from '../../environments/environment';

@Injectable()
export class HomeService {

  /**
   * it is the list of carousel items
   */
  private carouselItems: CarouselItem[];

  constructor() {
    this.carouselItems = [{
      src: environment.BASE_URL + 'assets/img/natura.jpg',
      alt: 'Natura',
      title: 'First item',
      description: 'what a desert'
    }, {
      src: environment.BASE_URL + 'assets/img/fiume.jpeg',
      alt: 'Fiume',
      title: 'Title only',
    }, {
      src: environment.BASE_URL + 'assets/img/girasoli.jpg',
      alt: 'Girasoli',
      description: 'Description only.<br>This interval is custom to <b>3s</b>',
      interval: 3000
    }, {
      src: environment.BASE_URL + 'assets/img/panchina.jpeg',
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
