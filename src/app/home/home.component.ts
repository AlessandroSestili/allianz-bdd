import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatTable) table: any;

  displayedColumns: string[] = ['name', 'Description', 'FileType', 'Download'];

  dataSource: any[] = [
    { name: 'Hydrogen', Decription: 1.0079, FileType: 'H', Download: false},
    { name: 'Helium', Description: 4.0026, FileType: 'He',Download: false},
    { name: 'Lithium', Description: 6.941, FileType: 'Li',Download: false},
    { name: 'Beryllium', Description: 9.0122, FileType: 'Be',Download: false},
    { name: 'Boron', Description: 10.811, FileType: 'B',Download: false},
    { name: 'Carbon', Description: 12.0107, FileType: 'C',Download: false},
    { name: 'Nitrogen', Description: 14.0067, FileType: 'N',Download: false},
    { name: 'Oxygen', Description: 15.9994, FileType: 'O',Download: false},
    { name: 'Fluorine', Description: 18.9984, FileType: 'F',Download: false},
    { name: 'Neon', Description: 20.1797, FileType: 'Ne',Download: false},
  ];

  constructor() { }

  ngOnInit(): void {
    // this.table.renderRows();
  }

}
