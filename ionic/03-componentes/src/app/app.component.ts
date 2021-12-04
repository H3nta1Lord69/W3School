import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  components: Observable<Components[]>;

  constructor( private dataService: DataService ) {}

  ngOnInit(){
    
    this.components = this.dataService.getmenuOpts();
    
  }
  
}
