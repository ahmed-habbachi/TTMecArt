import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenancesComponent } from './maintenances.component';
import { CarmeetingComponent } from './carmeeting/carmeeting.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';

const routes: Routes = [
  { path: '', component: MaintenancesComponent },
  { path: 'carmeeting', component: CarmeetingComponent },
  { path: 'clientlogin', component: ClientloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancesRoutingModule { }
