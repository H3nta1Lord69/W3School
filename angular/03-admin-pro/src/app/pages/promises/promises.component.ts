import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.getUsers().then((users) => console.log(users));
    //   const promise = new Promise((resolve, reject) => {
    //     if (true) {
    //       resolve('Holiwi');
    //     } else {
    //       reject('Algo anda mal');
    //     }
    //   });
    //   promise
    //     .then((msg) => {
    //       console.log(msg, 'Finitto');
    //     })
    //     .catch((error) => console.log(`Somenthin's not right`));
    //   console.log('Fin del init');
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data))
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
