import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  contactForm2 = new FormGroup({
    uname: new FormControl('',[Validators.required]),
    psw: new FormControl('',[Validators.required]),
    
  })

  constructor() { }

  ngOnInit(): void {
  }
  get uname() {
    return this.contactForm2.get('uname');
  } 
  get psw() {
    return this.contactForm2.get('psw');
  }

  onSubmit2() {
    console.log(this.contactForm2.value);
  } 

}
