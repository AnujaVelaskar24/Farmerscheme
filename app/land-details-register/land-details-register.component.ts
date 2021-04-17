import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {LandDetailsRegisterService} from '../land-details-register.service';
@Component({
  selector: 'app-land-details-register',
  templateUrl: './land-details-register.component.html',
  styleUrls: ['./land-details-register.component.css']
})
export class LandDetailsRegisterComponent implements OnInit {
  LandDetailsRegisterForm = new FormGroup({
    land_address:new FormControl('',[Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
    area:new FormControl('')
    
  });

  constructor( public landdetailsregister: LandDetailsRegisterService) { }
  

  ngOnInit(): void {}
  
  get land_address(){
    return this.LandDetailsRegisterForm.get('land_address');
  }
  get area(){
    return this.LandDetailsRegisterForm.get('area');
  }

  onSubmit() {
    console.log(this.land_address.value);
    this.landdetailsregister.landdetailsregister(this.LandDetailsRegisterForm.value).subscribe(res => {
      console.log(res)
      // this.router.navigateByUrl('/home/')
    });
    
  } 
}
