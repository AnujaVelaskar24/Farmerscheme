import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login1 } from '../login1';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public user_type:boolean;
  Login1: Login1[] = [];
  constructor(public LoginService: LoginService) { }

  ngOnInit(): void {
    var  uid:number = Number(sessionStorage.getItem("userid"));
    this.LoginService.get(uid).subscribe(res => {
   
      console.log(res, "ontype console data");
      this.Login1=res;
    
      console.log(Login1,"Login");
      console.log(this.Login1[0].user_type,"hi");
      this.user_type=this.Login1[0].user_type;
    });
  }

}
