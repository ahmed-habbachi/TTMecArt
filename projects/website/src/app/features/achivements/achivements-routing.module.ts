import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchivementsComponent } from './achivements.component';

const routes: Routes = [{ path: '', component: AchivementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchivementsRoutingModule { }
