import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Sellrequest } from './model/sellrequest';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  constructor(private httpClient: HttpClient) { }
  
  // resetpassword(): Observable<Sellrequest> {
  //   return this.httpClient.put<Sellrequest>(this.apiServer + '/sellrequest/', JSON.stringify(sellrequest), this.httpOptions)
  // }
  // resetpassword(userid:number, password:string) {
  //   this.httpClient.put(this.apiServer + '/resetpassword/', userid, password).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  resetpassword(resetpasswordobject): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/resetpassword/', JSON.stringify(resetpasswordobject), this.httpOptions)
  }
}
