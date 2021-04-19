import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApplyinsuranceinsertService {
  private apiServer = "http://localhost:59012/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  // insuranceclaim(insuranceclaim_obj): Observable<any> {
  //   console.log(insuranceclaim_obj,"service console");
  //   return this.httpClient.post<any>(this.apiServer + '/insuranceclaim/', JSON.stringify(insuranceclaim_obj), this.httpOptions)
  // }
applyinsurance(applyinsurance_obj): Observable<any>{
  console.log(applyinsurance_obj,"INSERT SERVICE");
  return this.httpClient.post<any>(this.apiServer+ '/insurance/', JSON.stringify(applyinsurance_obj), this.httpOptions)
}


}
