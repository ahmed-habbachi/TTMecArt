import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchivementsRoutingModule } from './achivements-routing.module';
import { AchivementsComponent } from './achivements.component';


@NgModule({
  declarations: [
    AchivementsComponent
  ],
  imports: [
    CommonModule,
    AchivementsRoutingModule
  ]
})
export class AchivementsModule { }
