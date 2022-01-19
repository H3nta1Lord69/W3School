import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('value') progress: number = 70;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueOutput: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.valueOutput.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      this.valueOutput.emit(0);
      return (this.progress = 0);
    }

    this.progress = this.progress + value;
    return this.valueOutput.emit(this.progress);
  }
}
