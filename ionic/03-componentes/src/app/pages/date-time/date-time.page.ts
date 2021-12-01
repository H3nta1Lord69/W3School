import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthDate: Date = new Date();

  customYearOptions = [2069, 2420, 1969, 2016];

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: ( event ) => {
          console.log( event );
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('object');
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  dateChange( event ) {
    console.log(event);
    console.log( new Date( event.detail.value ) );
  }

}
