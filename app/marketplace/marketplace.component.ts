import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  numbers = [1,2,3,4,5,6,7,8,9,10,11];
  constructor() { }

  ngOnInit(): void {
  }

}
