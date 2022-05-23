import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CarinfosComponent } from './carinfos/carinfos.component';
import { CarsComponent } from './cars.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: ':id', component: CarinfosComponent },
  { path: ':map', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
