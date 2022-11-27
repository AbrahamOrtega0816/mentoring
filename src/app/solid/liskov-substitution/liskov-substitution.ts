/**
 ****************************
 *
 * Penguin & Duck Example
 *
 ****************************
 */

/**
 * Wrong Implementation
 */

 export class Bird {
    constructor() {}
    fly() {
      console.log("I can fly");
    }
  }
  
  export class Duck extends Bird {
    constructor() {
      super();
    }
    quack() {}
  }
  
  // Penguin Can't be a bird as it can't fly
  export class Penguin extends Bird {
    constructor() {
      super();
    }
    override fly() {
      throw Error("I can't fly");
    }
  }
  
  /**
   * @ Solution
   */
  
  export class FlyingBird {
    constructor() {}
    fly() {
      console.log("I can fly");
    }
  }
  
  export class SwimmingBird {
    constructor() {}
    swim() {
      console.log("I can swim");
    }
  }
  
  export class Duck2 extends FlyingBird {
    constructor() {
      super();
    }
    quack() {}
  }
  
  // Penguin Can't be a bird as it can't fly
  export class Penguin2 extends SwimmingBird {}