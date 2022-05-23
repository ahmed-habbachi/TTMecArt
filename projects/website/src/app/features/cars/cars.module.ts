import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarcardComponent } from './carcard/carcard.component';
import { CarinfosComponent } from './carinfos/carinfos.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarinfosComponent,
    CarcardComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
