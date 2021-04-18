import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './model/login';
import{fakeAsync} from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class Login2Service {

  log:Login;
  public loginstatus = new BehaviorSubject<boolean>((sessionStorage.length!=0)?true:false);

  get isLoggedin()
  {
    return this.loginstatus.asObservable();
  }
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
login(login): Observable<any> {
  return this.httpClient.post<any>(this.apiServer + '/login/', JSON.stringify(login), this.httpOptions)
}
}
