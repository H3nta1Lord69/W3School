import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      if (true) {
        resolve('Holiwi');
      } else {
        reject('Algo anda mal');
      }
    });

    promise
      .then((msg) => {
        console.log(msg, 'Finitto');
      })
      .catch((error) => console.log(`Somenthin's not right`));

    console.log('Fin del init');
  }
}
