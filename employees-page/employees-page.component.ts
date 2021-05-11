import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface Employees {
  number: number;
  name: string;
  group: string;
  position: string;
  leader: string;
  month: string;
}

const ELEMENT_DATA: Employees[] = [
  {number: 111, name: 'Иванов И.И.', group: 'Разработчики', position: 'Ведущий разработчик', leader: 'Руководитель 1', month: 'ТММЕД ЛКЗЛ',},
];

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent {

  displayedColumns: string[] = ['number', 'name', 'group', 'position', 'leader', 'month'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

}
