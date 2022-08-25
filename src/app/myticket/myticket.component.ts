import { Component, OnInit } from '@angular/core';
import { products } from '../public/Productsproduct';
import { Product } from '../design/product';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.css']
})
export class MyticketComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CommonService,
    ) { }
  product: Product | undefined;
  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('myticketId'));
  console.log(this.route)
  console.log(productIdFromRoute)

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  console.log(this.product)
  }

  addToCart(product: Product) {
    confirm('are you sure')
  this.cartService.addToCart(product);
}
}
