import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalSharedModule } from './globalShared/components/global-shared.module';
import { authInterceptorProviders } from './globalShared/helpers/interceptor';
import { AuthService } from './globalShared/service/auth.service';
import { loaderInterceptorProviders } from './globalShared/helpers/loader-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './globalShared/service/loader.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    GlobalSharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, LoaderService ,authInterceptorProviders, loaderInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
