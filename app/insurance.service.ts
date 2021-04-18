import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Insurance } from './model/insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  insurance(userid:number): Observable<Insurance[]> {
    return this.httpClient.get<any>(this.apiServer + '/insurance?userid=' + userid)
  }
}
