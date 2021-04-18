import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Contactus } from './model/contactus';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    constructor(private httpClient: HttpClient) { }
    
    contactus(Contactus): Observable<any> {
      return this.httpClient.post<any>(this.apiServer + '/contactus/', JSON.stringify(Contactus), this.httpOptions)
    }
}
