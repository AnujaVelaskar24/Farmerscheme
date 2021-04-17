import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import {Landdetailsregister} from './model/landdetailsregister'
@Injectable({
  providedIn: 'root'
})
export class LandDetailsRegisterService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

landdetailsregister(landdetailregister): Observable<any> {
  return this.httpClient.post<any>(this.apiServer + '/land/', JSON.stringify(landdetailregister), this.httpOptions)
}
}