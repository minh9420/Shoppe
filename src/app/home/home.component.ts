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
  asyncTabs: Observable<ExampleTab[]>;
  tabs: string[] = new Array<string>();
  constructor(public dialog: MatDialog,) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  
   }

  ngOnInit(): void {
  }
  products = [
    {
      id:1, name: 'iphonexl', description: 'ncc', price: 800
    },
    {
      id:2, name: 'iphone12', description: 'cunnxg ncc', price: 800
    },
    {
      id:3, name: 'iphone13', description: 'cunnxg dc', price: 500
    }
  ]
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
