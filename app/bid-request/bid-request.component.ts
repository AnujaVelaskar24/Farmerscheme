import { Component, OnInit } from '@angular/core';
import { GetbidrequestService } from '../getbidrequest.service';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-bid-request',
  templateUrl: './bid-request.component.html',
  styleUrls: ['./bid-request.component.css']
})

export class BidRequestComponent implements OnInit {

crop_id:number;
  constructor(private sharedservice:SharedserviceService,public getbidrequest:GetbidrequestService) { }

  ngOnInit(): void {
    this.sharedservice.crop_id.subscribe((id)=>{
      this.crop_id=id;
      console.log(this.crop_id);
    })

    
  }

}
