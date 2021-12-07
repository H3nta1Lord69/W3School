import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];

  constructor( private dataService: DataService ) { }

  searchText: string = '';

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
    
  }

  onSearchChange( ev ) {
    this.searchText = ev.detail.value;
  }

}
