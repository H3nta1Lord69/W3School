import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchText = '';
  ideas: string[] = [
    'Encanto',
    'Avengers',
    'Spiderman',
    'El señor de los anillos',
    'Batman',
    'Superman',
  ];

  constructor() {}

  search(ev) {
    const valueInput = ev.detail.value;
    console.log(valueInput);
  }
}
