import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDeleteComponent } from './read-delete.component';
import {provideMockStore} from "@ngrx/store/testing";

describe('ReadDeleteComponent', () => {
  let component: ReadDeleteComponent;
  let fixture: ComponentFixture<ReadDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // The next three lines are replaced by the MockStore provider in our case:
      // imports: [StoreModule.forRoot(
      //   { heroes: heroReducer }
      // )],
      providers: [provideMockStore({})],
      declarations: [ ReadDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
