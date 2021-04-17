import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { Getbidclass } from './getbidclass';

@Injectable({
  providedIn: 'root'
})
export class GetbidrequestService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  getbidrequest(): Observable<Getbidclass[]> {
    return this.httpClient.get<Getbidclass[]>(this.apiServer + '/BidRequest/')
  }
}
