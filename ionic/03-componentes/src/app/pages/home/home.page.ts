import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Components } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<Components[]>;

  constructor(  private menuCtrl: MenuController,
                private dataService: DataService ) { }

  ngOnInit() {

    this.components = this.dataService.getmenuOpts();

  }

  showMenu() {

    this.menuCtrl.open('first');

  }

}
