import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncoraRoutingModule } from './encora-routing.module';
import { EncoraComponent } from './encora.component';


@NgModule({
  declarations: [
    EncoraComponent
  ],
  imports: [
    CommonModule,
    EncoraRoutingModule
  ]
})
export class EncoraModule { }
