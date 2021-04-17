import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  crop_id:BehaviorSubject<number>= new BehaviorSubject(0);

  constructor() { }
}
