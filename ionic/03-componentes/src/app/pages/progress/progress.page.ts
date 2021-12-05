import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  percentage: number = 0;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( e ) {
    this.percentage = e.detail.value / 100;
  }

}
