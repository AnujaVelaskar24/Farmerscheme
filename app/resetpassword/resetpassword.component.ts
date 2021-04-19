import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm = new FormGroup({
    newpassword: new FormControl('',[Validators.required,Validators.minLength(3)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
