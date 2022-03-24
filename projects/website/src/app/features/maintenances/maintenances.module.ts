import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenancesRoutingModule } from './maintenances-routing.module';
import { MaintenancesComponent } from './maintenances.component';


@NgModule({
  declarations: [
    MaintenancesComponent
  ],
  imports: [
    CommonModule,
    MaintenancesRoutingModule
  ]
})
export class MaintenancesModule { }
