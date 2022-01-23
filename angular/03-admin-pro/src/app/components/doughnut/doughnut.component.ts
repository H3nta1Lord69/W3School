import { Component, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

  @Input() title: string = 'Undefined';

  // constructor() { }

  // ngOnInit(): void {
  // }

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'f_label', 's_label', 't_label' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 100, 100, 100 ] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
