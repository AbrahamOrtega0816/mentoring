import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/counter/counter.state';
import { increment, decrement, storeCounter } from '../store/counter/counter.actions';
import { getCount } from '../store/counter/counter.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  name = 'Angular & NgRx';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount));
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }
  increment(): void {
    this.store.dispatch(increment());
  }
  storeVal(num: number): void {
    this.store.dispatch(storeCounter({ val: num }));
  }
  ngOnInit(): void {
    this.increment();
  }
}
