import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminInsuranceApprovalService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  Getinsurance_information(): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/admininsuranceapproval/')
  }
  update(policy_no:number): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/admininsuranceapproval?policy_no='+policy_no )
  }
}
