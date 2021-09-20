import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SubmitFormComponent } from './submit-form/submit-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridModule} from 'ag-grid-angular';
import { ButtonrendererComponent } from './buttonrenderer/buttonrenderer.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ButtonviewrendererComponent } from './buttonviewrenderer/buttonviewrenderer/buttonviewrenderer.component';
import { ButtoneditrendererComponent } from './buttoneditrenderer/buttoneditrenderer/buttoneditrenderer.component';
import { AddressDashboardComponent } from './address-dashboard/address-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SubmitFormComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    UpdateFormComponent,
    ViewContactComponent,
    ButtonrendererComponent,
    ButtonviewrendererComponent,
    ButtoneditrendererComponent,
    AddressDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([ButtonrendererComponent,ButtoneditrendererComponent,ButtonviewrendererComponent,DashboardComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
