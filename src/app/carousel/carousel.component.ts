import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CarouselItem} from './carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {

  @Input() items: CarouselItem[];
  @Input() autoSlide: boolean = true;
  @Input() showControls: boolean = true;
  @Input() interval: number = 5000;

  currentItem: CarouselItem & { index: number };

  get showCaption(): boolean {
    return !!(this.currentItem?.title?.length || this.currentItem?.description?.length);
  }

  private currentInterval;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.previousValue !== this.items) {
      this.currentItem = this.items?.length ? {...this.items[0], index: 0} : null;
      this.startInterval();
    }
  }

  slideTo(index: number): void {
    this.currentItem = {...this.items[index], index};
    this.startInterval();
  }

  slideToPrev(): void {
    const index = this.currentItem.index - 1;
    this.slideTo(index >= 0 ? index : this.items.length - 1);
  }

  slideToNext(): void {
    const index = this.currentItem.index + 1;
    this.slideTo(index < this.items.length ? index : 0);
  }

  private startInterval(): void {
    if (this.autoSlide) {
      this.stopInterval();
      this.currentInterval = setInterval(this.slideToNext.bind(this), this.currentItem.interval || this.interval);
    }
  }

  private stopInterval(): void {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
  }
}
