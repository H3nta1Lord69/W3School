import { Component, OnInit } from '@angular/core';

interface Components {

  icon: string;
  name: string;
  redirectTo: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
