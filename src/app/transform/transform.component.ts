import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { TransfromValue } from '../design/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {
  shippingCosts!: Observable<TransfromValue[]>
  constructor(
    private commonservice: CommonService
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.commonservice.getShippingPrices()
    
  }

}
