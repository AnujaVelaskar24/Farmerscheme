import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminBidApprovalService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  Getbid_information(): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/adminbidapproval/')
  }
  update(request_id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/adminbidapproval?request_id='+request_id )
  }
}
