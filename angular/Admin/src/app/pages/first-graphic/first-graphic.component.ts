import { Component } from '@angular/core';

@Component({
  selector: 'app-first-graphic',
  templateUrl: './first-graphic.component.html',
  styles: [
  ]
})
export class FirstGraphicComponent {

  public label1: string[] = ['Token', 'Nudes', 'Comissions'];
  public data1 = {
    labels: this.label1,
    datasets: [
      { data: [ 8, 420, 69 ] }
    ]
  };

  public label2: string[] = ['Graphic', 'Vanity', 'Senseless'];
  public data2 = {
    labels: this.label2,
    datasets: [
      { data: [ 1, 16, 69 ] }
    ]
  };

  public label3: string[] = ['Money', 'Crypto'];
  public data3 = {
    labels: this.label3,
    datasets: [
      { data: [ 99, 1 ] }
    ]
  };

  public label4: string[] = ['PC', 'Wow Token', 'M&K', 'Plastiline', 'Condoms'];
  public data4 = {
    labels: this.label4,
    datasets: [
      { data: [ 1, 5, 2, 69, 420 ] }
    ]
  };

}
