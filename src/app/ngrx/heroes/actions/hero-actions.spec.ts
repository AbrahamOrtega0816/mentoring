// hero-actions.spec.ts
import {AddHero, RemoveHero} from './hero-action';

describe('Action', () => {
  it('should create an AddHero Action', () => {
    expect(new AddHero({name: 'TheHolyTester', description: 'This is the Holy Tester'}) ).toBeTruthy();
  });
  it('should create a RemoveHero Action', () => {
    expect(new RemoveHero(1) ).toBeTruthy();
  });
});
