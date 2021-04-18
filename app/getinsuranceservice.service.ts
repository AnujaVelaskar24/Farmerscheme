import { Injectable } from '@angular/core';
import { Getinsurance } from './getinsurance';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetinsuranceserviceService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }
  // getinsurance():Observable<Getinsurance[]> {
  //   return this.httpClient.get<Getinsurance[]>(this.apiServer + '/insurance/')
  // }
  getinsurance(crop_name:string): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/insurance?crop_name=' + crop_name)
  }

}
