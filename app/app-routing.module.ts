import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FarmerhomeComponent} from './farmerhome/farmerhome.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { BidderhomeComponent } from './bidderhome/bidderhome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {FarmerTransactionHistoryComponent} from './farmer-transaction-history/farmer-transaction-history.component';
import {BidderTransactionHistoryComponent} from './bidder-transaction-history/bidder-transaction-history.component';
import {BidRequestComponent} from './bid-request/bid-request.component';
import {ApplyInsuranceComponent} from './apply-insurance/apply-insurance.component';
import {AdminhomeComponent} from './adminhome/adminhome.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminCropApprovalComponent} from './admin-crop-approval/admin-crop-approval.component';
import {AdminAccountApprovalComponent} from './admin-account-approval/admin-account-approval.component';
import {ApplyBidComponent} from './apply-bid/apply-bid.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {path: '', component: FarmerhomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Farmerhome', component: FarmerhomeComponent},
  {path: 'ClaimInsurance', component: ClaimInsuranceComponent},
  {path: 'BidderHome', component: BidderhomeComponent},
  {path: 'LoginComponent', component: LoginComponent},
  {path: 'RegisterComponent', component: RegisterComponent},
  {path: 'MarketplaceComponent', component: MarketplaceComponent},
  {path: 'BidderTransactionHistoryComponent', component: BidderTransactionHistoryComponent},
  {path: 'FarmerTransactionHistoryComponent', component: FarmerTransactionHistoryComponent},
  {path: 'BidRequestComponent', component: BidRequestComponent},
  {path: 'ApplyInsuranceComponent', component: ApplyInsuranceComponent},
  {path: 'ApplyBidComponent', component: ApplyBidComponent},
  {path: 'AdminhomeComponent', component: AdminhomeComponent},
  {path: 'AdminLoginComponent', component: AdminLoginComponent},
  {path: 'AdminCropApprovalComponent', component: AdminCropApprovalComponent},
  {path: 'AdminAccountApprovalComponent', component: AdminAccountApprovalComponent},
  {path: 'AboutUsComponent', component:AboutUsComponent},
  // {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
