// hero-actions.ts
import {Action} from "@ngrx/store";
import {Hero} from "../models/hero";

export const ADD_HERO = 'ADD_HERO';

export class AddHero implements Action {
  type: string = ADD_HERO

  constructor(public heroToBeAdded: Hero) {
  }
}

export const REMOVE_HERO = 'REMOVE_HERO';

export class RemoveHero implements Action {
  type: string = REMOVE_HERO

  constructor(public indexOfHeroToBeRemoved: number) {
  }
}

