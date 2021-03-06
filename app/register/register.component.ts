import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public ph_certificate: boolean=false;
  contactForm = new FormGroup({
    user_type:new FormControl(''),
    land_address:new FormControl(''),
    area:new FormControl(''),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    password1: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email_id: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    home_address: new FormControl('',[Validators.required]),
   
    phone_no: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10), Validators.pattern("^[0-9]+$")]),
    account_no: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")]),
    ifsc_code: new FormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
    pan: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    Aadhar: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(12),Validators.pattern("^[0-9]+$")]),
    certificate:new FormControl('')
  });
  constructor( public RegisterService: RegisterService,private router: Router) { }
  

  ngOnInit(): void {}
  
  
  get user_type(){
    return this.contactForm.get('user_type');
  }
  get username() {
    return this.contactForm.get('username');
  } 
  get password() {
    return this.contactForm.get('password');
  }
  get password1() {
    return this.contactForm.get('password');
  }
  get email_id() {
    return this.contactForm.get('email_id');
  }
  get home_address() {
    return this.contactForm.get('home_address');
  }
  get phone_no() {
    return this.contactForm.get('phone_no');
  }
  get account_no() {
    return this.contactForm.get('account_no');
  }
  get ifsc_code() {
    return this.contactForm.get('ifsc_code');
  }
  get pan() {
    return this.contactForm.get('pan');
  }
  get Aadhar() {
    return this.contactForm.get('Aadhar');
  }
  get land_address(){
    return this.contactForm.get('land_address');
  }
  get area(){
    return this.contactForm.get('area');
  }
  get certificate(){
    return this.contactForm.get('certificate');
  }
 
  changeSelection()
  {
    if(this.ph_certificate==false){
      this.ph_certificate=true;
    }
    else{
      this.ph_certificate=false;
    }
    console.log(this.ph_certificate, "Ph certificate");
  }

  
  onSubmit() {
    this.contactForm.value.certificate=this.ph_certificate;
    if(this.contactForm.value.password == this.contactForm.value.password1 )
    {
      console.log(this.contactForm.value, "Data incomming");
      this.RegisterService.register(this.contactForm.value).subscribe(res => {
        
         if(this.user_type.value==='false')
         {
          sessionStorage.setItem("userid",res);
           console.log("farmer");
           this.router.navigateByUrl('landdetailsregister');
         }
         else
         {
           alert("Congratulations your account has been successfully registered. You can login once your account is approved. ");
           this.router.navigateByUrl('home');
         }
       
       
       });
    }
    else
    {
      alert("Password and Confirm Password does not match!");
    }
    
    
  } 

  private selectedLink: string="Male";        
  
    setradio(e: string): void   
  {  
  
        this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }
}
