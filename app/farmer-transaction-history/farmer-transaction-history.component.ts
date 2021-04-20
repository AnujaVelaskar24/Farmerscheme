import { Component, OnInit } from '@angular/core';
import { Farmerhistory } from '../farmerhistory';
import { FarmerhistoryService } from '../farmerhistory.service';

@Component({
  selector: 'app-farmer-transaction-history',
  templateUrl: './farmer-transaction-history.component.html',
  styleUrls: ['./farmer-transaction-history.component.css']
})
export class FarmerTransactionHistoryComponent implements OnInit {
  
  Farmerhistory: Farmerhistory[] = [];
  
  constructor(public FarmerhistoryService: FarmerhistoryService) { }

  ngOnInit(): void {
    var  uid:number = Number(sessionStorage.getItem("userid"));
  //   this.FarmerhistoryService.getAll(uid).subscribe((data: Farmerhistory[])=>{
  //     this.Farmerhistory = data;
  // })  
console.log(uid,"userid");

  this.FarmerhistoryService.getAll(uid).subscribe(res => {
    
    console.log(res, "ontype console data");
    //res.bidding_time=res.bidding_time.Date;
    this.Farmerhistory=res;
    // this.Farmerhistory.Farmerhistory.bidding_time=Farmerhistory.bidding_time.ToShortDateString();
    console.log(Farmerhistory,"farmerhistory");
  });
  }

}
