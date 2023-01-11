import { Component, OnInit } from '@angular/core';
import {
  combineAll,
  concatMap,
  delay,
  from,
  fromEvent,
  interval,
  map,
  mapTo,
  merge,
  mergeMap,
  Observable,
  of,
  share,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  loading: boolean = false;
  private unsubscribe: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    //------start from and of operator ----------
    // converting an object to observable
    const person: Person = {
      name: 'david',
    };
    const personObs: Observable<Person> = of(person);
    personObs.subscribe((data) => {
      console.log('person', data);
    });

    //converting a string to observable
    const strObs: Observable<string> = of('bharat');
    strObs.subscribe((data) => {
      console.log('person string', data);
    });

    // converting promise to observable
    const personPromise: Promise<Person> = Promise.resolve(person);
    const persObs = from(personPromise);
    persObs.subscribe((data) => {
      if(1){

      }
      console.log('person promise', data);
    });

    //------end from and of operator ----------

    //2.) map  & tap operator
    const source = of('david');
    source
      .pipe(
        map((data) => {
          return data.toUpperCase();
        })
      )
      .subscribe((data) => {
        console.log('mapped object', data);
      });

    // tap does not make changes to actual stream when ever we
    // dont want to change the data.. we can log the data..or may be want to send some signal
    // to some servce and we dont want to maipulate the data..
    const source2 = of('david');
    source2
      .pipe(
        tap((data) => {
          console.log(data.toUpperCase());
          return data.toUpperCase();
        })
      )
      .subscribe((data) => {
        console.log('tapped object', data);
      });

    // making use of share operator
    const request = this.getPosts();
    this.setLoadingSpinner(request);
    request.subscribe((data) => {
      console.log('data for posts', data);
    });
    request.subscribe((data) => {
      console.log('data for posts again', data);
    });

    const $button = document.getElementById('main-button') as HTMLElement;
    const click$ = fromEvent($button, 'click');

    const subscription = click$.subscribe({
      next: (event) => console.log('Event :', event),
    });

    //emit delay value
    const source3 = of(2000, 1000);
    // map value from source3 into inner observable, when complete emit result and move to next
    const example = source3.pipe(
      concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(Number(val))))
    );
    //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe((val) =>
      console.log(`With concatMap: ${val}`)
    );

    // showing the difference between concatMap and mergeMap
    const mergeMapExample = source3
      .pipe(
        // just so we can log this after the first example has run
        delay(5000),
        mergeMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(Number(val))))
      )
      .subscribe((val) => console.log(`With mergeMap: ${val}`));

    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);

    // other examples

    // using a regular map
    from([1,2,3,4]).pipe(
      map(param => this.getData(param))
    ).subscribe(val => val.subscribe(data => console.log('map:', data)));

    // using mergeMap
    from([1, 2, 3 ,4]).pipe(
      mergeMap(param => this.getData(param))
    ).subscribe(val => console.log('mergeMap:', val));

    // using concatMap
    from([1, 2, 3 ,4]).pipe(
      concatMap(param => this.getData(param))
    ).subscribe(val => console.log('concatMap:', val));

  }

   getData(param : number) {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
      delay(delayTime)
    )
  }

  setLoadingSpinner(observable: Observable<Object>) {
    this.loading = true;
    observable.subscribe((data: any) => {
      this.loading = false;
      console.log('data for posts inside spinner logic', data);
    });
  }

  getPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(share());
  }

  mergeExample() {
    const first = interval(1000).pipe(mapTo('first'), take(5));
    const second = interval(1500).pipe(mapTo('second'), take(5));
    merge(first, second)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(console.log);
  }

  combineAllExample() {
    const second = of('1');
    const first = of('2');
    merge(first, second).pipe(combineAll()).subscribe(console.log);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
