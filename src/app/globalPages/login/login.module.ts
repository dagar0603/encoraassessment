import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GlobalSharedModule } from 'src/app/globalShared/components/global-shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    LoginRoutingModule,
    GlobalSharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class LoginModule { 
  constructor(){
  }
}
