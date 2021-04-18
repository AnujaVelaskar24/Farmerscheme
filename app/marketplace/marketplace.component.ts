import { Component, OnInit } from '@angular/core';
import { Getmarketclass } from '../getmarketclass';
import {GetmarketplaceService} from '../getmarketplace.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';
import { BidrequestService } from '../bidrequest.service';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  uid:number = Number(sessionStorage.getItem("userid"));

  BidForm = new FormGroup({
    placebid: new FormControl('',[Validators.required]),
    userid: new FormControl(sessionStorage.getItem("userid")),
    request_id: new FormControl(),
  })

  get placebid() {
    return this.BidForm.get('placebid');
  } 
  get request_id() {
    return this.BidForm.get('request_id');
  } 
  get userid()
  {
    return this.BidForm.get('userid');
  }

  router: any;
  constructor(public getmarket:GetmarketplaceService,
     private sharedservice:SharedserviceService, 
     public bidrequestservice :BidrequestService) {}
  getmarkets : Getmarketclass[]=[];

  ngOnInit(): void {
    this.getmarket.getmarketplace().subscribe((data:Getmarketclass[])=>{
      this.getmarkets=data;
      console.log(this.getmarkets, "MARKETPLACE DATA");
    })
  }
  onPlacebid(){
    let bidobj = new bid_history();
    bidobj.request_id= this.reqid;
    bidobj.userid=this.uid;
    bidobj.amount=this.BidForm.value.placebid;
    bidobj.bidding_time = new Date();
    this.bidrequestservice.placebid(bidobj).subscribe(res => {

    });
  }

  public reqid:number;
  public bidrequestdata = [];
  applybid(request_id:number){
   // this.router.navigateByUrl('BidRequest');
   //console.log(crop_id);
  //  this.sharedservice.crop_id.next(crop_id);
  this.reqid = request_id; 
  this.bidrequestservice.getvalues(request_id).subscribe(res => {
    this.bidrequestdata = res;
  });
    
  }

}
export class bid_history {
  request_id:number;
  userid:number;
  amount: number;
  bidding_time: Date;
}
