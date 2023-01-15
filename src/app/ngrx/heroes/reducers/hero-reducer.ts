// hero-reducer.ts
import {Hero} from "../models/hero";
import {ADD_HERO, AddHero, REMOVE_HERO, RemoveHero} from "../actions/hero-action";
import {Action, INIT} from "@ngrx/store";

const initialState : Hero[] = [{
  name: "My Initial Hero",
  description: "This is my Initial Hero"
}]

export function heroReducer (state : Hero[] = [], action: Action): Hero[] {
  switch(action.type) {
    case ADD_HERO:
      return [...state, (action as AddHero).heroToBeAdded]
    case REMOVE_HERO:
      const newState = [...state]
      newState.splice((action as RemoveHero).indexOfHeroToBeRemoved,1)
      return newState
    case INIT:
      return initialState
    default:
      throw Error(`The action type "${action.type}" is not implemented`)
  }
}
