import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
// import {StoreModule} from "@ngrx/store";
// import {heroReducer} from "../../reducers/hero-reducer";
import {provideMockStore} from "@ngrx/store/testing";

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // The next three lines are replaced by the MockStore provider in our case:
      // imports: [StoreModule.forRoot(
      //   { heroes: heroReducer }
      // )],
      providers: [provideMockStore({})],
      declarations: [ CreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
