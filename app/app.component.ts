import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Login2Service } from './login2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmerscheme';

  constructor(private service:Login2Service)
  {

  }

  public loginstatus$:Observable<boolean>;
  logout()
  {
    sessionStorage.clear();
    this.service.loginstatus.next(false);
  }
  ngOnInit():void{
    this.loginstatus$=this.service.isLoggedin;
  }
}
