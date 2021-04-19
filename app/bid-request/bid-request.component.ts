import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { RouterModule, Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';
import { BidrequestService } from '../bidrequest.service';
import {GetmarketplaceService} from '../getmarketplace.service';


@Component({
  selector: 'app-bid-request',
  templateUrl: './bid-request.component.html',
  styleUrls: ['./bid-request.component.css']
})

export class BidRequestComponent implements OnInit {
  contactForm = new FormGroup({
    bid:new FormControl('',[Validators.required,Validators.pattern("^[0-9]+$")]),
    
    
  });
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

  

  public bidrequestdata = [];
crop_id:number;
  constructor(public getmarket:GetmarketplaceService,
    private sharedservice:SharedserviceService, 
    public bidrequestservice :BidrequestService,
    private router: Router) 
  {
    const request_id = JSON.parse(localStorage.getItem('request_id'));
    const crop_id = JSON.parse(localStorage.getItem('crop_id'));
    console.log(request_id,crop_id,"Request id");
  //   this.router.navigateByUrl('/bidrequest');
  //  this.router.navigateByUrl('BidRequest');

   this.sharedservice.crop_id.next(request_id);
  // this.reqid = request_id; 
  this.bidrequestservice.getvalues(request_id).subscribe(res => {
    this.bidrequestdata = res;
    console.log(this.bidrequestdata, "DATA OF BID")
  });
   }
   uid:number = Number(sessionStorage.getItem("userid"));
   onPlacebid(){
    
    let bidobj = new bid_history();
    bidobj.request_id= Number(this.request_id);
    bidobj.userid=this.uid;
    bidobj.amount=this.BidForm.value.placebid;
    bidobj.bidding_time = new Date();
    this.bidrequestservice.placebid(bidobj).subscribe(res => {

    });
  }
  ngOnInit(): void {
    this.sharedservice.crop_id.subscribe((id)=>{
      this.crop_id=id;
      console.log(this.crop_id);
    })

    
  }
  get bid(){
    return this.contactForm.get('bid');
  }

  onSubmit() { }

}
export class bid_history {
  request_id:number;
  userid:number;
  amount: number;
  bidding_time: Date;
}
