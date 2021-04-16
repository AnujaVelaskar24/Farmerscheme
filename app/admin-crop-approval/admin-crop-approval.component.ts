import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmincropapprovalService } from '../admincropapproval.service';

@Component({
  selector: 'app-admin-crop-approval',
  templateUrl: './admin-crop-approval.component.html',
  styleUrls: ['./admin-crop-approval.component.css']
})

export class AdminCropApprovalComponent implements OnInit {
  sellrequestService: any;

  public crop_approval_data = [];
  constructor(public fb: FormBuilder,
    private router: Router,
    public admincropapprovalservice: AdmincropapprovalService) 
    { 
    this.admincropapprovalservice.admincropapproval().subscribe(res => {
      console.log(res, "sell request console");
      
      this.crop_approval_data = res;
    });
    // this.admincropapprovalservice.admincropapproval().subscribe(res => {
    //   console.log(res, "sell request console");
    // });
  }

  ngOnInit(): void {
  }

}
