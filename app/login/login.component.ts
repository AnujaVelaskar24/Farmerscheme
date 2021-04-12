import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm = new FormGroup({
    uname: new FormControl('',[Validators.required]),
    psw: new FormControl('',[Validators.required]),
    
  })

  constructor() { }

  ngOnInit(): void {}
  get uname() {
    return this.contactForm.get('uname');
  } 
  get psw() {
    return this.contactForm.get('psw');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  } 
}
