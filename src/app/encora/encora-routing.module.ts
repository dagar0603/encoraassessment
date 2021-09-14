import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from '../app.routes.names';
import { EncoraComponent } from './encora.component';
import { homeRoutes } from './home/home-routing.module';

const routes: Routes = [
  {
      path: appRoutesNames.DEFAULT, component: EncoraComponent,
      children: [
          { path: appRoutesNames.DEFAULT, redirectTo: appRoutesNames.DASHBOARD, pathMatch: 'prefix' },
          ...homeRoutes,

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncoraRoutingModule { }
