import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  publisher: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.superHeroes = this.dataService.getHeroes();

  }

  segmentChanged( ev ) {
    console.log(ev.detail.value);

    if ( ev.detail.value === 'Todos' ) {
      return this.publisher = '';
    }

    this.publisher = ev.detail.value;
  }

}
