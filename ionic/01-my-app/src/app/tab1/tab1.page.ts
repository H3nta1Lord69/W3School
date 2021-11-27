import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {

    let number = 10;
    debugger;
    number = 20;
    number = number + 10;
    number = 0;

    console.log(number);
  }

}
