import { Product } from './../design/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() product!: Product
  @Output() notify = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
    // console.log(this.product)
  }
  tungrathoi() {
    let quanque = 'concactaui';
    this.notify.emit(quanque)
  }
}

