import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {LoginService} from '../login.service';
import {GetlandService} from '../getland.service';
import { Getlandclass } from '../model/getlandclass';
import {AdminlogService} from '../adminlog.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public status:boolean=false;
  public uid:number=Number(sessionStorage.getItem('userid'));
  public email_id:number=Number(sessionStorage.getItem('email_id'));
  public usertype:string=(sessionStorage.getItem('user_type'));
  land1:Getlandclass[]=[];
  LoginForm : FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    public landservice:GetlandService,
    public AdminlogService: AdminlogService) { }


  ngOnInit(){
    
    this.LoginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })
  
  // this.AdminLoginForm = this.fb.group({
  //   email_id: ['',Validators.required],
  //   password: ['',Validators.required]
  // })
  
}

get username() {
  return this.LoginForm.get('username');
} 
get password() {
  return this.LoginForm.get('password');
}

logout(){
 sessionStorage.removeItem('userid'); 
 sessionStorage.removeItem('usertype');
 sessionStorage.removeItem('username');
 this.router.navigateByUrl('/home');
}

onSubmitLoginForm() {
  
  this.loginService.login(this.LoginForm.value).subscribe(res => {
    console.log(res,"res value");
    if(res === "Unsuccessful")
    {
      console.log("invalid");
      alert("Invalid Credentials");
      // sessionStorage.setItem("username",this.LoginForm.value.username)
      // this.router.navigateByUrl('Farmerhome');
    }
    else
    {
      console.log("valid");
      sessionStorage.setItem("username",this.LoginForm.value.username)
      sessionStorage.setItem("userid",res.userid)
      sessionStorage.setItem("user_type",res.user_type)
      console.log(this.usertype,"usertype!!");
      console.log(this.email_id,"eMAILLL")
     
      if(res.user_type===false)
      {
        this.router.navigateByUrl('farmerhome');
        console.log(res.userid, "UserID");
        this.landservice.getlandid(res.userid).subscribe(res=>{
          console.log(res,"LAND ID ");
          this.land1=res;
       
        sessionStorage.setItem("land_id",res.land_id)
        // console.log(this.land1[0].land_id,"SESION SE LAND ID")
        // console.log(res.land_id, "SESSION")
      })
        
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


// -----------------------ADMIN PART------------------------------

// AdminLoginForm : FormGroup;
// get admin_email_id() {
//   return this.AdminLoginForm.get('admin_email_id');
// } 
// get admin_password() {
//   return this.AdminLoginForm.get('admin_password');
// }

// changeStatus(){
// console.log("Here!!!!!!!!!@@@@@@@@@@@")
// }

// onSubmit() {
//   console.log(this.AdminLoginForm.value);
//   this.AdminlogService.login(this.AdminLoginForm.value).subscribe(res => {
//     console.log(res,"res.user");
//     if(res === "Unsuccessful")
//     {
//       console.log("invalid");
//     }
//     else
//     {
//       console.log("valid");
//       sessionStorage.setItem("userid",res.userid)   
//         this.router.navigateByUrl('adminhome');
//     }
//   });
// }

}
