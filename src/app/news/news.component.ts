import { Product } from './../design/product';
import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // items = this.commonservice.getItems();
  // getItems!: Product[]
  items:any
  constructor(
    private commonservice: CommonService
  ) { }

  ngOnInit(): void {
  this.items = this.commonservice.getItems();
    console.log('conbonglongxuyen',this.items)
  }
  buy() {

  }
  xoaCart() {
    console.log('alo')
    this.items = this.commonservice.clearCart()
  }
}
