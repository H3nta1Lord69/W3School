import { Component } from '@angular/core';

import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-first-graphic',
  templateUrl: './first-graphic.component.html',
  styles: [
  ]
})
export class FirstGraphicComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public colors: Color[] = [
    //{ backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ];

}
