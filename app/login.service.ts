import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
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
