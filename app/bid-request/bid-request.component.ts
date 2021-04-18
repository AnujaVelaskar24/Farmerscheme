import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { RouterModule, Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-bid-request',
  templateUrl: './bid-request.component.html',
  styleUrls: ['./bid-request.component.css']
})

export class BidRequestComponent implements OnInit {

  contactForm = new FormGroup({
    bid:new FormControl('',[Validators.required,Validators.pattern("^[0-9]+$")]),
    
    
  });

crop_id:number;
  constructor(private sharedservice:SharedserviceService,private router: Router) { }

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
