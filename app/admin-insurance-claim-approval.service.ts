import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminInsuranceClaimApprovalService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  Getinsuranceclaim_information(): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/admininsuranceclaimapproval/')
  }
  update(claim_id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/admininsuranceclaimapproval?claim_id='+claim_id )
  }
}
