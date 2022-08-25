import { products } from './../public/Productsproduct';
import { Product } from './../design/product';
import { HiringComponent } from './../hiring/hiring.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Observer } from 'rxjs';
import { ExampleTab } from '../design/interfaceTD';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog,) {
   }

  ngOnInit(): void {
    console.log(this.products)
  }
  // products!: Product[]
  products = [...products]
  

  share(): void {
    const dialogRef = this.dialog.open(HiringComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onNotify(event:any) {
    window.alert(event);
  }
}
