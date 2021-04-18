import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotService } from '../forgot.service';
import { Forgot } from '../forgot';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  LoginForm : FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    public ForgotService: ForgotService) { }
  

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email_id: ['',Validators.required],
     
    })
  }
  get email_id() {
    return this.LoginForm.get('email_id');
  } 



  onSubmit() {
  this.ForgotService.getAll(this.LoginForm.value).subscribe(res => {
    
    console.log(res, "console data");
    
    
  });
  }

}
