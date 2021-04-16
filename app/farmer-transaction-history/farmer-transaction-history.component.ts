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
    this.FarmerhistoryService.getAll().subscribe((data: Farmerhistory[])=>{
      this.Farmerhistory = data;
  })  
  }

}
