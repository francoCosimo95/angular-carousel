import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {CarouselModule} from '../carousel/carousel.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {
}
