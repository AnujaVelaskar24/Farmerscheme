import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Register } from './register';
@Injectable({
  providedIn: 'root'
})
export class AdmincropapprovalService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  admincropapproval(): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/admincropapproval/');
  }
  update(request_id:number,biddata): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/admincropapproval?request_id='+request_id, JSON.stringify(biddata), this.httpOptions  )
  }
  // update(request_id:number, Register): Observable<any> {
  //   return this.httpClient.post<any>(this.apiServer + '/admincropapproval?request_id='+request_id, JSON.stringify(Register), this.httpOptions )
  // }

}

