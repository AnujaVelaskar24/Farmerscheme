import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login1 } from '../login1';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Login1: Login1[] = [];
  constructor(public LoginService: LoginService) { }

  ngOnInit(): void {
    var  uid:number = Number(sessionStorage.getItem("userid"));
    this.LoginService.get(uid).subscribe(res => {
    
      console.log(res, "ontype console data");
      this.Login1=res;
      console.log(Login1,"Login");
    });
  }

}
