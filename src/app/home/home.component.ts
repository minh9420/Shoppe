import { Component, OnInit } from '@angular/core';
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
  constructor() {
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

}
