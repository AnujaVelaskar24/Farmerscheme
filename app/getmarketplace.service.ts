import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { Getmarketclass } from './getmarketclass';

@Injectable({
  providedIn: 'root'
})
export class GetmarketplaceService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient){ }
  getmarketplace(): Observable<Getmarketclass[]> {
    return this.httpClient.get<Getmarketclass[]>(this.apiServer + '/marketplace/')
  }
}
