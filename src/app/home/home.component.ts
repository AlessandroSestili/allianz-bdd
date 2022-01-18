import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
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
    { name: 'Hydrogen', Description: 1.111, FileType: 'txt', Download: "download" },
    { name: 'Helium', Description: 4.0026, FileType: 'txt',Download: "download"},
    { name: 'Lithium', Description: 6.941, FileType: 'txt',Download: "download"},
    { name: 'Beryllium', Description: 9.0122, FileType: 'txt',Download: "download"},
    { name: 'Boron', Description: 10.811, FileType: 'txt',Download: "download"},
    { name: 'Carbon', Description: 12.0107, FileType: 'txt',Download: "download"},
    { name: 'Nitrogen', Description: 14.0067, FileType: 'txt',Download: "download"},
    { name: 'Oxygen', Description: 15.9994, FileType: 'txt',Download: "download"},
    { name: 'Fluorine', Description: 18.9984, FileType: 'txt',Download: "download"},
    { name: 'Neon', Description: 20.1797, FileType: 'txt',Download: "download"},
  ];

  isSearching: boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  // aggiunge una riga editabile alla tabella dei reperibili
  addRow(){
    this.dataSource.push({
      name:"",
      Description: "",
      FyleType: "",
      Download: ""
    })
    this.table.renderRows();
  }

  switchSearch(){
    this.isSearching = !this.isSearching
  }

}
