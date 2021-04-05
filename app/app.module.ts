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
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AdminAccountApprovalComponent } from './admin-account-approval/admin-account-approval.component';
import { AdminCropApprovalComponent } from './admin-crop-approval/admin-crop-approval.component';
import { FarmerTransactionHistoryComponent } from './farmer-transaction-history/farmer-transaction-history.component';
import { BidderTransactionHistoryComponent } from './bidder-transaction-history/bidder-transaction-history.component';
import { BidRequestComponent } from './bid-request/bid-request.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimInsuranceComponent,
    ApplyInsuranceComponent,
    ApplyBidComponent,
    FarmerhomeComponent,
    BidderhomeComponent,
    AdminhomeComponent,
    MarketplaceComponent,
    AdminAccountApprovalComponent,
    AdminCropApprovalComponent,
    FarmerTransactionHistoryComponent,
    BidderTransactionHistoryComponent,
    BidRequestComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminApprovalComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
