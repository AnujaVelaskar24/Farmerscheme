import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Register, land } from './register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    constructor(private httpClient: HttpClient) { }
    
    register(Register): Observable<any> {
      console.log(Register,"service console");
      return this.httpClient.post<any>(this.apiServer + '/default1/', JSON.stringify(Register), this.httpOptions)
    }
}
