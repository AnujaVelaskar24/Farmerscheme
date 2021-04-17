import { Component, OnInit } from '@angular/core';
import { Bidderhistory } from '../bidderhistory';
import { BidderhistoryService } from '../bidderhistory.service';

@Component({
  selector: 'app-bidder-transaction-history',
  templateUrl: './bidder-transaction-history.component.html',
  styleUrls: ['./bidder-transaction-history.component.css']
})
export class BidderTransactionHistoryComponent implements OnInit {

  Bidderhistory: Bidderhistory[] = [];
  constructor(public BidderhistoryService: BidderhistoryService) { }

  ngOnInit(): void {
    var  uid:number = Number(sessionStorage.getItem("userid"));
  //   this.FarmerhistoryService.getAll(uid).subscribe((data: Farmerhistory[])=>{
  //     this.Farmerhistory = data;
  // })  
console.log(uid,"userid");

  this.BidderhistoryService.getAll(uid).subscribe(res => {
    
    console.log(res, "ontype console data");
    this.Bidderhistory=res;
    console.log(Bidderhistory,"bidderhistory");
  });
  }

}
