import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { AuthGuard } from './globalShared/helpers/auth.guard';

const routes: Routes = [
  {path: appRoutesNames.DEFAULT, redirectTo:appRoutesNames.ENCORA, pathMatch: 'full'},
  { path: appRoutesNames.ENCORA, canLoad: [AuthGuard], loadChildren: () => import('./encora/encora.module').then(m => m.EncoraModule) },
  { path: appRoutesNames.LOGIN, loadChildren: () => import('./globalPages/login/login.module').then(m => m.LoginModule) },
  { path: appRoutesNames.NOT_FOUND, loadChildren: () => import('./globalPages/not-found/not-found.module').then(m => m.NotFoundModule) },  
  { path: appRoutesNames.ALL, redirectTo: appRoutesNames.NOT_FOUND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
