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

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      console.log(albums);
      this.albums = albums;
    });
    
  }

  onSearchChange( ev ) {
    console.log(ev.detail.value);
  }

}
