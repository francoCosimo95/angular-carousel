import {Component} from '@angular/core';
import {CarouselItem} from '../carousel/carousel-item';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  carouselItems: CarouselItem[];

  constructor(private homeService: HomeService) {
    this.carouselItems = this.homeService.getCarouselItems();
  }

}
