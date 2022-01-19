import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent {
  @Input('value') progress: number = 70;

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      return (this.progress = 0);
    }

    return (this.progress = this.progress + value);
  }
}
