import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'floors',
    title: 'Floors',
    loadComponent: () =>
      import('./features/floor/floor.component/floor.component').then((m) => m.FloorComponent),
  },
];
