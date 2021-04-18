import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { Insuranceclaim } from './model/insuranceclaim';

@Injectable({
  providedIn: 'root'
})
export class InsuranceclaimService {

  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    constructor(private httpClient: HttpClient) { }
    insuranceclaim(insuranceclaim_obj): Observable<any> {
      console.log(insuranceclaim_obj,"service console");
      return this.httpClient.post<any>(this.apiServer + '/insuranceclaim/', JSON.stringify(insuranceclaim_obj), this.httpOptions)
    }
}
