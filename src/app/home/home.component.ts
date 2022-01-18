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
    { name: 'Hydrogen', Decription: 1.0079, FileType: 'txt', Download:  "ok" },
    { name: 'Helium', Description: 4.0026, FileType: 'txt',Download: "false"},
    { name: 'Lithium', Description: 6.941, FileType: 'txt',Download: "false"},
    { name: 'Beryllium', Description: 9.0122, FileType: 'txt',Download: "false"},
    { name: 'Boron', Description: 10.811, FileType: 'txt',Download: "false"},
    { name: 'Carbon', Description: 12.0107, FileType: 'txt',Download: "false"},
    { name: 'Nitrogen', Description: 14.0067, FileType: 'txt',Download: "false"},
    { name: 'Oxygen', Description: 15.9994, FileType: 'txt',Download: "false"},
    { name: 'Fluorine', Description: 18.9984, FileType: 'txt',Download: "false"},
    { name: 'Neon', Description: 20.1797, FileType: 'txt',Download: "false"},
  ];

  isSearching: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.table.renderRows();
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
