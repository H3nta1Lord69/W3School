import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
    // this.returnObservable()
    //   .pipe(retry())
    //   .subscribe(
    //     (value) => console.log('Subs:', value),
    //     (err) => console.warn('Error:', err),
    //     () => console.info('Obs terminado')
    //   );

    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(100).pipe(
      map((value) => {
        return value + 1;
      }),
      filter((value) => (value % 2 === 0 ? true : false))
      // take(20),
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('Reach 2');
        }
      }, 1000);
    });
  }
}
