import { Injectable } from '@angular/core';
import { products } from '../public/Productsproduct';
import { Product } from '../design/product';
import { HttpClient } from '@angular/common/http'
import { TransfromValue } from '../design/product';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  items: Product[] = []
  constructor(
    private http: HttpClient
  ) { }
  addToCart(product: Product) {
    this.items.push(product); 
    // return this.items
  }
  getItems() {
    // console.log(this.items)
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<TransfromValue[]>('https://6307339b3a2114bac75bff36.mockapi.io/User');
  }
  
}

