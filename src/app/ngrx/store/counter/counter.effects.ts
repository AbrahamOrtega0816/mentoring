import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { storeCounter } from './counter.actions'
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  setCounter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeCounter),
        map(action => {
          // this.storage.set('count', action.val).subscribe();
          console.log(action.val);
        })
      ),
    { dispatch: false }
  );
}
