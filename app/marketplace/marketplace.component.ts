import { Component, OnInit } from '@angular/core';
import { Getmarketclass } from '../getmarketclass';
import {GetmarketplaceService} from '../getmarketplace.service';
import {Router} from '@angular/router'
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  numbers = [1,2,3,4,5,6,7,8,9,10,11];
  router: any;
  constructor(public getmarket:GetmarketplaceService, private sharedservice:SharedserviceService) {}
  getmarkets : Getmarketclass[]=[];

  ngOnInit(): void {
    this.getmarket.getmarketplace().subscribe((data:Getmarketclass[])=>{
      this.getmarkets=data;
    })
  }
  applybid(crop_id:number){
   // this.router.navigateByUrl('BidRequest');
   //console.log(crop_id);
   this.sharedservice.crop_id.next(crop_id);
    
  }

}
