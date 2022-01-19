import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {

  f_progress: number = 25;
  s_progress: number = 35;

  get getFirstProgress() {
    return `${ this.f_progress }%`;
  }

  get getSecondProgress() {
    return `${ this.s_progress }%`;
  }

  changeChildComponent( ev: number ) {
    console.log("Hey!!!!!", ev);
  }

}
