import { Component, Inject, OnInit } from '@angular/core';
import { IStrategy } from './strategy.interface';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
})
export class StrategyComponent implements OnInit {

  private strategy: IStrategy;

  constructor(@Inject('propStrategy') public propStrategy: IStrategy) {
    this.strategy = propStrategy;
  }

  ngOnInit(): void {
  }

  doSomeBusinessLogic(): number[] {
    //Context: Sorting data using the strategy (not sure how it\'ll do it)
    return this.strategy.getListNumber([...Array(5).keys()]);
  }

}
