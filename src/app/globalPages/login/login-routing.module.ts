import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from 'src/app/app.routes.names';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
      path: appRoutesNames.DEFAULT, component: LoginComponent
  },
  {
      path: appRoutesNames.LOGIN, component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
