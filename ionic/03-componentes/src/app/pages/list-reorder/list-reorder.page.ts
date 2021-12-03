import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  persons: string[] = ['Aquaman', 'Superman', 'Batman', 'Cyborg', 'Flash', 'Mujer Maravilla'];
  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ) {

    console.log( event );

    const moveItem = this.persons.splice( event.detail.from, 1 )[0];
    this.persons.splice( event.detail.to, 0, moveItem );

    event.detail.complete();

    console.log( this.persons );

  }

}
