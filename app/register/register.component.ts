import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  contactForm = new FormGroup({
    uname: new FormControl('',[Validators.required,Validators.minLength(10)]),
    psw: new FormControl('',[Validators.required,Validators.minLength(10)]),
    psw1: new FormControl('',[Validators.required,Validators.minLength(10)]),
    email: new FormControl('',[Validators.required,Validators.minLength(9),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    city: new FormControl('',[Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10), Validators.pattern("^[0-9]+$")]),
    Acc: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]+$")]),
    ifsc: new FormControl('',[Validators.required,Validators.minLength(10),]),
    pan: new FormControl('',[Validators.required,Validators.minLength(10)]),
    Aadhar: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]+$")]),
  })

  constructor() { }

  ngOnInit(): void {}

  public isfarmer:string="true";
  public certificate_label:string="Certificate Number";
  public radioData:string = "farmer";

 
 label_decision(){
    if(this.isfarmer=="true")
  {
    
    this.certificate_label="Soil pH Certificate"; 
  }else{
    this.certificate_label="Trader License"; 

  }
  }
  

  get uname() {
    return this.contactForm.get('uname');
  } 
  get psw() {
    return this.contactForm.get('psw');
  }
  get psw1() {
    return this.contactForm.get('psw1');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get city() {
    return this.contactForm.get('city');
  }
  get mobile() {
    return this.contactForm.get('mobile');
  }
  get Acc() {
    return this.contactForm.get('Acc');
  }
  get ifsc() {
    return this.contactForm.get('ifsc');
  }
  get pan() {
    return this.contactForm.get('pan');
  }
  get Aadhar() {
    return this.contactForm.get('Aadhar');
  }

  onSubmit() {
    // console.log(this.contactForm.value);
    console.log(this.radioData);
  } 
}
