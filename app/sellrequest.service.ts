import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Sellrequest } from './sellrequest';
@Injectable({
  providedIn: 'root'
})
export class SellrequestService {

  private apiServer = "http://localhost:4200/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  sellrequest(sellrequest): Observable<Sellrequest> {
    return this.httpClient.post<Sellrequest>(this.apiServer + '/sellrequest/', JSON.stringify(sellrequest), this.httpOptions)
  }
}

