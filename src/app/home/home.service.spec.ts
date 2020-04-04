import {TestBed} from '@angular/core/testing';

import {HomeService} from './home.service';
import {HomeModule} from './home.module';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule]
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return items', () => {
    expect(service.getCarouselItems().length).not.toEqual(0);
  });
});
