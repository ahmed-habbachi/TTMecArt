import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchivementsRoutingModule } from './achivements-routing.module';
import { AchivementsComponent } from './achivements.component';
import { AwardComponent } from './award/award.component';


@NgModule({
  declarations: [
    AchivementsComponent,
    AwardComponent
  ],
  imports: [
    CommonModule,
    AchivementsRoutingModule
  ]
})
export class AchivementsModule { }
