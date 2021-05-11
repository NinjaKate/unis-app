import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
export interface Employees {
  number: number;
  name: string;
  group: string;
  position: string;
  month: string;
  month1: string;
  month2: string;
  month3: string;
}

const ELEMENT_DATA: Employees[] = [
  {number: 111, name: 'Иванов И.И.', group: 'Разработчики', position: 'Ведущий разработчик',
    month: 'ТММЕД ЛКЗЛ', month1: 'Альянс ЕГИССО', month2: 'Альянс ЕГИССО', month3: 'Альянс ЕГИССО'},
];
@Component({
  selector: 'app-employment-page',
  templateUrl: './employment-page.component.html',
  styleUrls: ['./employment-page.component.scss']
})
export class EmploymentPageComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'group', 'position', 'month', 'month1', 'month2', 'month3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
