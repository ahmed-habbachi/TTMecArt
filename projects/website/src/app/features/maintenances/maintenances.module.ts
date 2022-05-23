import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenancesRoutingModule } from './maintenances-routing.module';
import { MaintenancesComponent } from './maintenances.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { CarmeetingComponent } from './carmeeting/carmeeting.component';
import { DevisComponent } from './devis/devis.component';


@NgModule({
  declarations: [
    MaintenancesComponent,
    ClientloginComponent,
    CarmeetingComponent,
    DevisComponent
  ],
  imports: [
    CommonModule,
    MaintenancesRoutingModule
  ]
})
export class MaintenancesModule { }
