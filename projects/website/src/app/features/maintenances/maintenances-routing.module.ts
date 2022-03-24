import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenancesComponent } from './maintenances.component';

const routes: Routes = [{ path: '', component: MaintenancesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancesRoutingModule { }
