import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // static a:number=1;
  constructor(private router: Router,private location: Location) { 
    console.log(sessionStorage.getItem('userid'));
    
    
      
  }

  ngOnInit() { 
    
    // while(this.a<2){
    //   this.load();
    //   this.a=this.a+1;
    // }
    //this.load() 
    // let currentUrl = this.router.url;
    //       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //       this.router.onSameUrlNavigation = 'reload';
    //       this.router.navigate([currentUrl]);
   // this.router.navigateByUrl('home');
    // if(sessionStorage.getItem('userid')){
    //   sessionStorage.removeItem('userid');
    //   this.reloadComponent();
    // }
      
    
    //sessionStorage.removeItem('userid'); 
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    load() {
      location.reload()
      }

}
