import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';

import { LoginComponent } from './login/login.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';
import {LandDetailsRegisterComponent } from './land-details-register/land-details-register.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';

import { FarmerhomeComponent} from './farmerhome/farmerhome.component';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {ApplyBidComponent} from './apply-bid/apply-bid.component';
import {BidRequestComponent} from './bid-request/bid-request.component';
import {FarmerTransactionHistoryComponent} from './farmer-transaction-history/farmer-transaction-history.component';
import {ApplyInsuranceComponent} from './apply-insurance/apply-insurance.component';
import { ClaimInsuranceeComponent } from './claim-insurancee/claim-insurancee.component';
import {CommonmarketplaceComponent} from './commonmarketplace/commonmarketplace.component'

import { BidderhomeComponent } from './bidderhome/bidderhome.component';
import {BidderTransactionHistoryComponent} from './bidder-transaction-history/bidder-transaction-history.component';

import {AdminhomeComponent} from './adminhome/adminhome.component';
import {AdminAccountApprovalComponent} from './admin-account-approval/admin-account-approval.component';
import {AdminCropApprovalComponent} from './admin-crop-approval/admin-crop-approval.component';
import {AdminBidApprovalComponent} from './admin-bid-approval/admin-bid-approval.component';
import { AdminInsuranceApprovalComponent } from './admin-insurance-approval/admin-insurance-approval.component';
import { AdminInsuranceClaimApprovalComponent } from './admin-insurance-claim-approval/admin-insurance-claim-approval.component';
import { ClassMethod } from '@angular/compiler';

const routes: Routes = [
  {path: '', component: FarmerhomeComponent},

  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},

  {path: 'adminlogin', component: AdminLoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landdetailsregister', component: LandDetailsRegisterComponent},
  

  {path: 'farmerhome', component: FarmerhomeComponent},
  {path: 'marketplace', component: MarketplaceComponent},
  {path: 'applybid', component: ApplyBidComponent},
  {path: 'bidrequest', component: BidRequestComponent},
  {path: 'farmertransactionhistory', component: FarmerTransactionHistoryComponent},
  {path: 'applyinsurance', component: ApplyInsuranceComponent},
  {path: ' claiminsurancee ', component:  ClaimInsuranceeComponent },
  {path: 'commonmarketplace', component:CommonmarketplaceComponent},


  {path: 'bidderhome', component: BidderhomeComponent},
  {path: 'biddertransactionhistory', component: BidderTransactionHistoryComponent},

  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'adminaccountapproval', component: AdminAccountApprovalComponent},
  {path: 'admincropapproval', component: AdminCropApprovalComponent},
  {path: 'adminbidapproval', component: AdminBidApprovalComponent},
  {path: 'admininsuranceapproval', component: AdminInsuranceApprovalComponent},
  {path: 'admininsuranceclaimapproval', component: AdminInsuranceClaimApprovalComponent},
  // {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }