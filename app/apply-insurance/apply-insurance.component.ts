import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CroptypefetchService } from '../croptypefetch.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']
})
export class ApplyInsuranceComponent implements OnInit {
  applyinsuranceForm = new FormGroup({
    croptype: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    crop_id : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    
  })
  isShow:boolean
 
  displaytext(){
    this.isShow=!this.isShow;
  }
  constructor(public fb: FormBuilder,
    private router: Router,
    public croptypefetchService: CroptypefetchService) { 
    this.isShow=false;
   
  }
  public selectedtype:string;
  public crops = [];
  ontypeSelect(selectedtype){
  console.log(selectedtype);
  
  this.croptypefetchService.croptypefetch(this.selectedtype).subscribe(res => {
  console.log(res, "ontype console data");
  this.crops=res;
  });
  }

  onSubmit(){
    console.log(this.applyinsuranceForm.value);
  }
  ngOnInit(): void {

   
  }

}
