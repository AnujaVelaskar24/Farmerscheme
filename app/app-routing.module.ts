import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FarmerhomeComponent} from './farmerhome/farmerhome.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { BidderhomeComponent } from './bidderhome/bidderhome.component';

const routes: Routes = [
  {path: '', component: FarmerhomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Farmerhome', component: FarmerhomeComponent},
  {path: 'ClaimInsurance', component: ClaimInsuranceComponent},
  {path: 'BidderHome', component: BidderhomeComponent},
  // {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
