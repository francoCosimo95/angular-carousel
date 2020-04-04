import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CarouselItem} from './carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  /**
   * It is the list of items to show in the carousel
   */
  @Input() items: CarouselItem[];

  /**
   * if `false` disable auto slide
   */
  @Input() autoSlide: boolean = true;

  /**
   * if `false` it hides controls to the user
   */
  @Input() showControls: boolean = true;

  /**
   * Set the interval time in ms
   */
  @Input() interval: number = 5000;

  /**
   * It is the current item shown
   */
  currentItem: CarouselItem & { index: number };

  /**
   * it checks the currentItem to decide if need to show the caption
   */
  get showCaption(): boolean {
    return !!(this.currentItem?.title?.length || this.currentItem?.description?.length);
  }

  /**
   * this is the current Interval, if autoSlide is enabled it will be set with the slide interval or the main interval
   */
  private currentInterval;

  /**
   * set the first item as current if exists and start a new interval if needed
   */
  ngOnInit(): void {
    this.currentItem = this.items?.length ? {...this.items[0], index: 0} : null;
    this.startInterval();
  }

  /**
   * clear the interval if exists before the component destroying
   */
  ngOnDestroy(): void {
    this.stopInterval();
  }

  /**
   * show a specific item
   * @param index: index in the items
   */
  slideTo(index: number): void {
    this.currentItem = {...this.items[index], index};
    this.startInterval();
  }

  /**
   * slide to the prev item or to the last one if it is the first item
   */
  slideToPrev(): void {
    const index = this.currentItem.index - 1;
    this.slideTo(index >= 0 ? index : this.items.length - 1);
  }

  /**
   * slide to the next item or to the first one if it is the last item
   */
  slideToNext(): void {
    const index = this.currentItem.index + 1;
    this.slideTo(index < this.items.length ? index : 0);
  }

  /**
   * clear prev interval then start a new one if `autoSlide = true` and there are more than 1 item
   */
  private startInterval(): void {
    this.stopInterval();
    if (this.autoSlide && this.items.length > 1) {
      this.currentInterval = setInterval(this.slideToNext.bind(this), this.currentItem.interval || this.interval);
    }
  }

  /**
   * clear the currentInterval if set
   */
  private stopInterval(): void {
    this.currentInterval && clearInterval(this.currentInterval);
  }
}
