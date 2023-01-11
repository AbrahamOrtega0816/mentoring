import { AppState } from './counter.state';
import { createSelector } from '@ngrx/store';

export const selectCounterState = (state: AppState) => state.counter;
export const getCount = createSelector(
  selectCounterState,
  counter => counter.count
);
