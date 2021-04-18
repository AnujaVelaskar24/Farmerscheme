import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminlogService } from '../adminlog.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  LoginForm : FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    public AdminlogService: AdminlogService) { }
  
  ngOnInit(): void {

    this.LoginForm = this.fb.group({
      email_id: ['',Validators.required],
      password: ['',Validators.required]
    })
  

}
get email_id() {
  return this.LoginForm.get('email_id');
} 
get password() {
  return this.LoginForm.get('password');
}

onSubmit() {
  console.log(this.LoginForm.value);
  this.AdminlogService.login(this.LoginForm.value).subscribe(res => {
    console.log(res,"res.user");
    if(res === "Unsuccessful")
    {
      console.log("invalid");
      // sessionStorage.setItem("username",this.LoginForm.value.username)
      // this.router.navigateByUrl('Farmerhome');
    }
    else
    {
      console.log("valid");
      //sessionStorage.setItem("username",this.LoginForm.value.username)
      sessionStorage.setItem("userid",res.userid)
      
        this.router.navigateByUrl('adminhome');
      
     
      
    }
    //console.log('User Logged In!')
   //this.router.navigateByUrl('/home/')
  });
}


get loginFormControl(){
  return this.LoginForm.controls;
}
}