import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ApplyInsuranceComponent } from './apply-insurance/apply-insurance.component';
import { ApplyBidComponent } from './apply-bid/apply-bid.component';
import { FarmerhomeComponent } from './farmerhome/farmerhome.component';
import { BidderhomeComponent } from './bidderhome/bidderhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimInsuranceComponent,
    ApplyInsuranceComponent,
    ApplyBidComponent,
    FarmerhomeComponent,
    BidderhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
