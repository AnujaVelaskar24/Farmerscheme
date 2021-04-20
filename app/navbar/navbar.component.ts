import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login.service';
import { GetlandService } from '../getland.service';
import { Getlandclass } from '../model/getlandclass';
import { AdminlogService } from '../adminlog.service';
import { ForgotService } from '../forgot.service';
import { Forgot } from '../forgot';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status:boolean=false;
  public uid:number=Number(sessionStorage.getItem('userid'));
  public usertype:string=(sessionStorage.getItem('user_type'));
  land1:Getlandclass[]=[];
  LoginForm : FormGroup;
  ForgetPasswordForm: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    public landservice: GetlandService,
    public AdminlogService: AdminlogService,
    public ForgotService: ForgotService) { }


  ngOnInit() {

    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.ForgetPasswordForm = this.fb.group({
      email_id: ['', Validators.required],

    })

  }
  get username() {
    return this.LoginForm.get('username');
  }
  get password() {
    return this.LoginForm.get('password');
  }

  logout() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('usertype');
    sessionStorage.removeItem('username');
    this.router.navigateByUrl('/home');
  }
  onSubmitLoginForm() {

    this.loginService.login(this.LoginForm.value).subscribe(res => {
      console.log(res, "res value");
      if (res === "Unsuccessful") {
        console.log("invalid");
        alert("Invalid Credentials");
        // sessionStorage.setItem("username",this.LoginForm.value.username)
        // this.router.navigateByUrl('Farmerhome');
      }
      else {
        console.log("valid");
        sessionStorage.setItem("username", this.LoginForm.value.username)
        sessionStorage.setItem("userid", res.userid)
        sessionStorage.setItem("user_type", res.user_type)
        console.log(this.usertype, "usertype!!");

        if (res.user_type === false) {
          this.router.navigateByUrl('farmerhome');
          console.log(res.userid, "UserID");
          this.landservice.getlandid(res.userid).subscribe(res => {
            console.log(res, "LAND ID ");
            this.land1 = res;

            sessionStorage.setItem("land_id", res.land_id)
            // console.log(this.land1[0].land_id,"SESION SE LAND ID")
            // console.log(res.land_id, "SESSION")
          })

        }
        else {
          console.log("valid");
          sessionStorage.setItem("username", this.LoginForm.value.username)
          sessionStorage.setItem("userid", res.userid)

          if (res.user_type === false) {
            this.router.navigateByUrl('farmerhome');
            this.landservice.getlandid(res.userid).subscribe(res => {
              this.land1 = res;

              sessionStorage.setItem("land_id", res.land_id)
              // console.log(this.land1[0].land_id,"SESION SE LAND ID")
              // console.log(res.land_id, "SESSION")
            })

          }
          else {
            this.router.navigateByUrl('bidderhome');
          }


        }
        //console.log('User Logged In!')
        //this.router.navigateByUrl('/home/')
      }
    });
  }

  get loginFormControl() {
    return this.LoginForm.controls;
  }


  //--------------------------------------------FORGET PASSWORD---------------------------------------------
  get email_id() {
    return this.ForgetPasswordForm.get('email_id');
  }
  Onpasswordclick() {
    this.status = !status;
    console.log(this.status);
  }
  onForgetPasswordSubmit() {
    console.log(this.ForgetPasswordForm.value, "EMAIL")
    this.ForgotService.getAll(this.ForgetPasswordForm.value).subscribe(res => {
      console.log(res, "RESPONSSE");
      if (res == "Successfull") {
        alert("Mail submitted sucessfully!! Please Login..");
        localStorage.setItem('email_id', this.ForgetPasswordForm.value.email_id);
        // localStorage.get
        this.router.navigateByUrl("/home");
      }
      else if (res == "Unsuccessful") {
        alert("Invalid Mail!!");
      }


    });
  }


}