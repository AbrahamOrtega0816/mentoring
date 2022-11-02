import { StrategyComponent } from './strategy.component';
import ReverseStrategy from './strategy.reverse';
import SortStrategy from './strategy.sort';

describe('StrategyComponent', () => {

  const contextReverseStrategy = new StrategyComponent(new ReverseStrategy());
  const contextSortStrategy = new StrategyComponent(new SortStrategy());

  it('should ReverseStrategy', () => {
    const contextarrayReverse = contextReverseStrategy.doSomeBusinessLogic()

    const arrayReverse = [...Array(5).keys()].reverse();

    expect(JSON.stringify(arrayReverse) === JSON.stringify(contextarrayReverse)).toBeTrue();
  });

  it('should SortStrateg', () => {
    const contextarraySort= contextSortStrategy.doSomeBusinessLogic()

    const sortReverse = [...Array(5).keys()].sort();

    expect(JSON.stringify(sortReverse) === JSON.stringify(contextarraySort)).toBeTrue();
  });
});
