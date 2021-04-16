import { Component, OnInit } from '@angular/core';
import { Getmarketclass } from '../getmarketclass';
import {GetmarketplaceService} from '../getmarketplace.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  numbers = [1,2,3,4,5,6,7,8,9,10,11];
  constructor(public getmarket:GetmarketplaceService) {}
  getmarkets : Getmarketclass[]=[];

  ngOnInit(): void {
    this.getmarket.getmarketplace().subscribe((data:Getmarketclass[])=>{
      this.getmarkets=data;
    })
  }

}
