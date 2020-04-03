import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarouselComponent} from './carousel.component';
import {CarouselModule} from './carousel.module';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  const items = [{
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
    interval: 500
  }, {
    src: '/assets/img/panchina.jpeg',
    alt: 'Panchina',
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as autoSlide 'true'`, () => {
    expect(component.autoSlide).toEqual(true);
  });

  it(`should have as showControls 'true'`, () => {
    expect(component.showControls).toEqual(true);
  });

  it(`should have as interval '5000'`, () => {
    expect(component.interval).toEqual(5000);
  });

  it(`should hide carousel with empty items array`, () => {
    component.items = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel')).not.toBeTruthy();
  });

  it(`should render carousel with items`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel')).toBeTruthy();
  });

  it(`should render image`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel img')).toBeTruthy();
  });

  it(`should set the correct alt attribute to the image`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel img').alt).toEqual(items[0].alt);
  });

  it(`should hide control with one item`, () => {
    component.items = [items[0]];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-control')).not.toBeTruthy();
  });

  it(`should render control with more than one item`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-control')).toBeTruthy();
  });

  it(`should hide title if it does not exists`, () => {
    component.items = [items[2]];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-item-title')).not.toBeTruthy();
  });

  it(`should render title if it exists`, () => {
    component.items = [items[0]];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-item-title')).toBeTruthy();
  });

  it(`should hide description if it does not exists`, () => {
    component.items = [items[1]];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-item-description')).not.toBeTruthy();
  });

  it(`should render description if it exists`, () => {
    component.items = [items[0]];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-item-description')).toBeTruthy();
  });

  it(`should change image after interval`, (done) => {
    component.interval = 1000;
    component.items = items;
    fixture.detectChanges();
    expect(component.currentItem.src).toEqual(items[0].src);
    setTimeout(() => {
      expect(component.currentItem.src).toEqual(items[1].src);
      done();
    }, 1001);
  });

  it(`should change image after next clicked`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector('.carousel .carousel-control.next').click();
    expect(component.currentItem.src).not.toEqual(items[0].src);
  });

  it(`should change image after prev clicked`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector('.carousel .carousel-control.prev').click();
    expect(component.currentItem.src).not.toEqual(items[0].src);
  });

  it(`should wait image interval, if exists, before change`, (done) => {
    component.items = items.filter((el, i) => i > 1);
    fixture.detectChanges();
    expect(component.currentItem.src).toEqual(component.items[0].src);
    setTimeout(() => {
      expect(component.currentItem.src).toEqual(component.items[1].src);
      done();
    }, component.items[0].interval + 1);
  });

  it(`should render an indicator for each item`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.carousel .carousel-indicators div').length).toEqual(items.length);
  });

  it(`should render as active the indicator of the current item`, () => {
    component.items = items;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.carousel .carousel-indicators div').className).toEqual('active');
  });

});
