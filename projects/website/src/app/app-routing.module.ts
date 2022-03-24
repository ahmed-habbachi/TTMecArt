import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'cars',
    loadChildren: () =>
      import('./features/cars/cars.module').then((m) => m.CarsModule),
  },
  {
    path: 'achivements',
    loadChildren: () =>
      import('./features/achivements/achivements.module').then(
        (m) => m.AchivementsModule
      ),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./features/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'maintenances',
    loadChildren: () =>
      import('./features/maintenances/maintenances.module').then(
        (m) => m.MaintenancesModule
      ),
  },
  {
    path: 'managements',
    loadChildren: () =>
      import('./features/managements/managements.module').then(
        (m) => m.ManagementsModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
