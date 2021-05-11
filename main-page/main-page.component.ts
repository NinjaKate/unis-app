import { Component} from '@angular/core';


export interface Presale {
  direction: number;
  client: string;
  project: number;
  leader: string;
  stage: number;
  status: number;
  id?: number;
}

export class Commerce {
  name: string;
  direction: number;
  leader: string;
  stage: number;
  status: number;
  id?: number;
}

const ELEMENT_DATA_PRESALE: Presale[] = [
  {direction: 1, client: 'Кокосов Андрей', project: 1, leader: 'Ответственный 1', stage: 1, status: 1, id: 1},
  {direction: 2, client: 'Геннадий Аронович', project: 2, leader: 'Ответственный 2', stage: 2, status: 2, id: 2},
  {direction: 3, client: 'Илон Маск', project: 3, leader: 'Ответственный 3', stage: 3, status: 3, id: 3},
];

const ELEMENT_DATA_COMMERCE: Commerce[] = [
  {name: 'ТММЕД', direction: 1, leader: 'Руководитель 1', stage: 1, status: 1, id: 1},
  {name: 'ЛКЗЛ', direction: 2, leader: 'Руководитель 2', stage: 2, status: 2, id: 2},
  {name: 'Альянс', direction: 3, leader: 'Руководитель 3', stage: 3, status: 3, id: 3},
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {
  displayedColumnsPresale: string[] = ['direction', 'client', 'project', 'leader', 'stage', 'status'];
  dataSourcePresale = ELEMENT_DATA_PRESALE;
  displayedColumnsCommerce: string[] = ['name', 'direction', 'leader', 'stage', 'status'];
  dataSourceCommerce = ELEMENT_DATA_COMMERCE;

  cardShow:boolean = false;
  toggleCard() {
    this.cardShow = !this.cardShow;
  }
}

