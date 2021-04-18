import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Getbidclass, bid_history } from './getbidclass';

@Injectable({
  providedIn: 'root'
})
export class BidrequestService {

  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getvalues(request_id:number): Observable<Getbidclass[]> {
    return this.httpClient.get<any>(this.apiServer + '/bidrequest?request_id=' + request_id)
  }

  placebid(biddata): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/bidrequest/', JSON.stringify(biddata), this.httpOptions)
  }

}
