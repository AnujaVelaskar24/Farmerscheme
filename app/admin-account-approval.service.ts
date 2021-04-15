import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountApprovalService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
Getuser_information(): Observable<any> {
  return this.httpClient.get<any>(this.apiServer + '/adminaccountapproval/')
}
onapprove(userid,user): Observable<any> {
  return this.httpClient.put<any>(this.apiServer + '/adminaccountapproval/', JSON.stringify(user), this.httpOptions)
}
}
