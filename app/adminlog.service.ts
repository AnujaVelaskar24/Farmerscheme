import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Admin } from './admin';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminlogService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  login(Admin): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/admin/', JSON.stringify(Admin), this.httpOptions)
  }
}
