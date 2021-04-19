import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public uid:number;
  LoginForm : FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    public loginService: LoginService) { }


  ngOnInit(){
    this.uid = Number(sessionStorage.getItem("userid"));
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

logout(){
 sessionStorage.removeItem('userid'); 
 this.router.navigateByUrl('home');
}
onSubmitLoginForm() {
  console.log(this.LoginForm.value);
  this.loginService.login(this.LoginForm.value).subscribe(res => {
    console.log(res,"res value");
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
      if(res.user_type===false)
      {
        this.router.navigateByUrl('farmerhome');
      }
      else
      {
        this.router.navigateByUrl('bidderhome');
      }
     
      
    }
    //console.log('User Logged In!')
   //this.router.navigateByUrl('/home/')
  });
}
get loginFormControl(){
  return this.LoginForm.controls;
}

}
