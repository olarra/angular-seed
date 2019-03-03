import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operator-root-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  private tiles: Array<any> = [
     {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
     {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
     {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
     {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
   ];

  constructor() { }

  ngOnInit() {
  }

}
