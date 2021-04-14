import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm : FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    public loginService: LoginService) { }


  ngOnInit(){
    this.LoginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })
}
  get username() {
    return this.LoginForm.get('username');
  } 
  get password() {
    return this.LoginForm.get('password');
  }

  onSubmit() {
    console.log(this.LoginForm.value);
    this.loginService.login(this.LoginForm.value).subscribe(res => {
      //console.log(res);
      if(res.message === "Successful")
      {
        console.log("valid");
        //this.router.navigateByUrl('');
      }
      else
      {
        //console.log("invalid");
      }
      //console.log('User Logged In!')
     //this.router.navigateByUrl('/home/')
    });
  }
  get loginFormControl(){
    return this.LoginForm.controls;
  }

}
