import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import {ResetpasswordService} from '../resetpassword.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm = new FormGroup({
    newpassword: new FormControl('',[Validators.required,Validators.minLength(3)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })
  public email_id:string=localStorage.getItem('email_id');
  public password:string;
  constructor(
    public resetpasswordservice :ResetpasswordService,
    private router: Router
  ) { 
    
  }

  onSubmit(){
    // this.password=this.resetpasswordForm.value.newpassword;

    let resetpasswordobject = new resetpasswordclass;
    resetpasswordobject.email_id = this.email_id;
    resetpasswordobject.password = this.resetpasswordForm.value.newpassword;
    this.resetpasswordservice.resetpassword(resetpasswordobject).subscribe(res => {
      console.log(res,"RESPONSE")
    });
  }
  
  ngOnInit(): void {
  }
  get newpassword() {
    return this.resetpasswordForm.get('newpassword');
  } 
  get confirmpassword() {
    return this.resetpasswordForm.get('confirmpassword');
  }

}
export class resetpasswordclass
{
  email_id: string;
  password: string;
}
