import { Component, OnInit, OnChanges, Input,  SimpleChanges, SimpleChange} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '@app/modules/core/models/user.model';

@Component({
  selector: 'operator-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements  OnChanges {
  @Input() dataSource;
  @Input() displayedColumns;
  private _dataSoruce;
  private _displayedColumns;
  // private dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor( ) { }

  ngOnChanges(changes: SimpleChanges) {
    const dataSource: SimpleChange = changes.dataSource;
    this._dataSoruce = dataSource.currentValue;
  }
}
