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
  // update(request_id:number, Register): Observable<any> {
  //   return this.httpClient.post<any>(this.apiServer + '/adminbidapproval?request_id='+request_id, JSON.stringify(Register), this.httpOptions )
  // }
  update(request_id:number, transactionobject): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/adminbidapproval?request_id='+request_id, JSON.stringify(transactionobject), this.httpOptions )
  }
  Get_bidid(request_id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/adminbidapproval?request_id='+request_id )
  }
  // register(Register): Observable<any> {
  //   console.log(Register,"service console");
  //   return this.httpClient.post<any>(this.apiServer + '/default1/', JSON.stringify(Register), this.httpOptions)
  // }
}
