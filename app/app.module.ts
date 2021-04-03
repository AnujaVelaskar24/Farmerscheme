import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FarmerhomeComponent } from './farmerhome/farmerhome.component';
import { BidderhomeComponent } from './bidderhome/bidderhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FarmerhomeComponent,
    BidderhomeComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
