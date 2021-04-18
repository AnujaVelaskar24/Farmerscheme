import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ContactusService} from '../contactus.service';
import { Contactus } from '../model/contactus';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  

  ContactusForm = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    query: new FormControl('',[Validators.required]),
  })

  get first_name() {
    return this.ContactusForm.get('first_name');
  }
  get last_name() {
    return this.ContactusForm.get('last_name');
  }
  get country() {
    return this.ContactusForm.get('country');
  }
  get query() {
    return this.ContactusForm.get('query');
  }
  get request_id() {
    return this.ContactusForm.get('request_id');
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public contactusService: ContactusService,
  ) { 
  }

  ngOnInit(): void {
    
  }
  uid:number = Number(sessionStorage.getItem("userid"));
  onSubmit()
  {
    this.contactusService.contactus(this.ContactusForm.value).subscribe(res => {
    });
  }

}
export class contactus {
        first_name:string;
        last_name: string;
        country: string;
        query: string;
}
