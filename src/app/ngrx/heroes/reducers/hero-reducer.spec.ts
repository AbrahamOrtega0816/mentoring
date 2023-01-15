// hero-reducer.spec.ts
import { heroReducer } from "./hero-reducer";
import { AddHero, RemoveHero } from "../actions/hero-action";
import { Hero } from "../models/hero";


describe('HeroReducer', () => {
  let initialState: Hero[]
  beforeEach(() => {
    initialState = [
      {name: 'FirstHero', description: 'This is the first hero' },
      {name: 'SecondHero', description: 'This is the second hero' },
      {name: 'ThirdHero', description: 'This is the third hero' }
    ]
  })

  it('called with AddHero action should return a state with the added hero', () =>
    {
      const addedHero = {name: 'AddedHero', description: 'This is the added hero' }
      const expectedState = [...initialState, addedHero]
      expect(heroReducer(initialState, new AddHero(addedHero)))
        .toEqual(expectedState)
    }
  )

  it('called with RemoveHero action should return a state with the correct hero deleted', () =>
    {
      const indexOfTheHeroToBeRemoved = 1
      const expectedState = [
        {name: 'FirstHero', description: 'This is the first hero' },
        {name: 'ThirdHero', description: 'This is the third hero' }
      ]

      expect(heroReducer(initialState, new RemoveHero(indexOfTheHeroToBeRemoved))).toEqual(expectedState)
    }
  )
})
