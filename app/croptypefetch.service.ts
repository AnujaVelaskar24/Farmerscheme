import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { Croptypefetch } from './croptypefetch';
@Injectable({
  providedIn: 'root'
})
export class CroptypefetchService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  croptypefetch(croptypefetch:string): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/sellrequest?croptypefetch=' + croptypefetch)
  }
}
