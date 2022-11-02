import { Component, Inject, OnInit } from '@angular/core';
import { ISolid } from './solid.interface';

@Component({
  selector: 'app-solid',
  templateUrl: './solid.component.html',
  styleUrls: ['./solid.component.css'],
})
export class SolidComponent implements OnInit ,ISolid{

  /**
   * Using interface segregation
   *
   * ! ISolid
   *
   * Pros
   * No client should be forced to depend on methods it does not use
  */
  id = 1

  messagsTypes = ['black', 'blue', 'white'];
  current = 0;
  maxCalories = 0;

  constructor(@Inject('propMaxCalories') public propMaxCalories : number) {
    this.maxCalories = propMaxCalories;
  }

  ngOnInit(): void {}

  /**
   * Using Single responsibility Principle
   *
   * Pros
   * A class should have only one reason to change.
   * Define each responsibility of a class as a reason for change.
   */
  //-------------------------------------------------------------------------------
  log(message : string) {
    console.log(message);
  }

  track(calories:number) {
    if (this.current < this.maxCalories) {
      this.current += calories;
    } else {
      // use another for its responsibility is logging
      this.log("Max Calories Exceeded");
    }
  }
  //-------------------------------------------------------------------------------


  /**
   * Using Open/Close Principle
   *
   * Pros
   * I can add more types as muuch as I need (open for extending)
   * without touching 'messagesForTypes' content again (closed for modification).
   */
  //-------------------------------------------------------------------------------
  printMessagesForTypes(messgaetype: string) {
    switch (messgaetype) {
      case 'black':
        console.log("I'm a message of type 'black'");
        break;
      case 'blue':
        console.log("I'm a message of type 'blue'");
        break;
      case 'white':
        console.log("I'm a message of type 'white'");
        break;
      default:
        console.log('messags type no found');
    }
  }

  messagesForTypes() {
    this.messagsTypes.forEach((type: string) =>
      this.printMessagesForTypes(type)
    );
  }
  //-------------------------------------------------------------------------------
}
