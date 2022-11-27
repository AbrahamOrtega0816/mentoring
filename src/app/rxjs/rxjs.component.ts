import { Component, OnInit } from '@angular/core';
import { combineAll, from, interval, map, mapTo, merge, 
  Observable, of, share, Subject, take, takeUntil, tap } from 'rxjs';
import { HttpClient } from "@angular/common/http";

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
    merge(first, second).pipe(takeUntil(this.unsubscribe)).subscribe(console.log);
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
