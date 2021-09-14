import { Routes } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: appRoutesNames.DASHBOARD, component: HomeComponent, pathMatch: 'full'
  },
];

