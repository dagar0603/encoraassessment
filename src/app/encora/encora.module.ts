import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncoraRoutingModule } from './encora-routing.module';
import { EncoraComponent } from './encora.component';
import { GlobalSharedModule } from '../globalShared/components/global-shared.module';
import { ContactService } from './shared/service/contact.service';
import { CompanyService } from './shared/service/company.service';
import { HomeModule } from './home/home.module';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { EditContactModalComponent } from './shared/components/edit-contact-modal/edit-contact-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EncoraComponent,
    EditContactModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EncoraRoutingModule,
    GlobalSharedModule,
    HomeModule,
    MatDialogModule,
    
  ],
  providers: [ContactService, CompanyService]
})
export class EncoraModule { }
