import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // Validatori della card inizale
  numberRegEx = /^-?(0|[1-9]\d*)?$/;
  companyFormControl = new FormControl('', [Validators.required]);
  policyFormControl = new FormControl('', [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(4)])

  //Validatori della table
  tableCompanyFormControl = new FormControl('', [Validators.required]);
  tablePolicyFormControl = new FormControl('', [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(4)])

  // Valori di ngModel della table
  tableCompany: any
  tablePolicy: any
  @ViewChild(MatTable) table: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  displayedColumns: string[] = ['CompanyName', 'Description', 'FileType', 'Download'];

  data: any[] = [
    { CompanyName: 'Hydrogen', Description: 1111, FileType: 'txt', Download:  "download" },
    { CompanyName: 'Helium', Description: 4.0026, FileType: 'txt',Download: "download"},
    { CompanyName: 'Lithium', Description: 6.941, FileType: 'txt',Download: "download"},
    { CompanyName: 'Beryllium', Description: 9.0122, FileType: 'txt',Download: "download"},
    { CompanyName: 'Boron', Description: 10.811, FileType: 'txt',Download: "download"},
    { CompanyName: 'Carbon', Description: 12.0107, FileType: 'txt',Download: "download"},
    { CompanyName: 'Nitrogen', Description: 14.0067, FileType: 'txt',Download: "download"},
    { CompanyName: 'Oxygen', Description: 15.9994, FileType: 'txt',Download: "download"},
    { CompanyName: 'Fluorine', Description: 18.9984, FileType: 'txt',Download: "download"},
    { CompanyName: 'Neon', Description: 20.1797, FileType: 'txt',Download: "download"},
  ];

  dataSource:any;

  isSearching: boolean = false

  constructor() { this.dataSource = new MatTableDataSource(this.data); }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  switchSearch(){
    this.isSearching = !this.isSearching
  }

  //Svuota i valori degli input dei campi sopra la TABLE
  refreshTableInputValue() {
    //Svuota i campi
    this.tableCompany = ''
    this.tablePolicy = ''

    //resetta gli errori
    this.tableCompanyFormControl.reset()
    this.tablePolicyFormControl.reset()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logger() {
  }

}
