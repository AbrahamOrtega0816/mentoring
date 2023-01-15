import { Component, OnInit } from '@angular/core';
import {Store, StoreModule} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {AddHero} from "../../actions/hero-action";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addHero(name: string, description: string) {
    this.store.dispatch(new AddHero({name: name, description: description}))
  }

}
