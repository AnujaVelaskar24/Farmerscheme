import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {LandDetailsRegisterService} from '../land-details-register.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-land-details-register',
  templateUrl: './land-details-register.component.html',
  styleUrls: ['./land-details-register.component.css']
})
export class LandDetailsRegisterComponent implements OnInit {
  LandDetailsRegisterForm = new FormGroup({
    land_address:new FormControl('',[Validators.required]),
    area:new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    userid:new FormControl(sessionStorage.getItem("userid")),
    
  });
  
  //console.log(uid);
  
  constructor( public LandDetailsRegisterService: LandDetailsRegisterService,private router: Router) { 
    
  }
  
  
  ngOnInit(): void {
    var uid:number = Number(sessionStorage.getItem("userid"));
    console.log(sessionStorage.getItem("userid"),"construct");
  }
  
  get land_address(){
    return this.LandDetailsRegisterForm.get('land_address');
  }
  get area(){
    return this.LandDetailsRegisterForm.get('area');
  }
  get userid(){
    return this.LandDetailsRegisterForm.get('userid');
  }

  onSubmit() {
    console.log( Number(sessionStorage.getItem("userid")),"onsub");
    // let landobj = new land();
    // landobj.land_address=this.land_address.value.land_address;
    // landobj.area=this.land_address.value.area;
    // landobj.userid= Number(sessionStorage.getItem("userid"));
    // console.log(landobj,"land detail")
    this.LandDetailsRegisterService.landdetailsregister(this.LandDetailsRegisterForm.value).subscribe(res => {
      console.log(res)
      alert("Congratulations your account has been successfully registered. You can login once your account is approved. ");
      sessionStorage.removeItem("userid");
      this.router.navigateByUrl('home');
      //this.router.navigateByUrl('/home/')
    });

    
    
  } 
}
export class land{
  land_address:string;
  area:number;
  userid:number;
}