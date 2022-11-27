// High level
class Car {
  private engine: EngineInterface;

  constructor(engine: EngineInterface) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start();
  }
}

interface EngineInterface {
  start: () => void;
}

// Low level
class PetrolEngine implements EngineInterface {
  public start(): void {
    console.log('PetrolEngine starts!');
  }
}

// Low level
class HybridEngine implements EngineInterface {
  public start(): void {
    console.log('HybridEngine starts!');
  }
}

// Low level
class DieselEngine implements EngineInterface {
  public start(): void {
    console.log('DieselEngine starts!');
  }
}

function main(): void {
  const hybridEngine = new HybridEngine();
  const hybridCar = new Car(hybridEngine);

  const petrolEngine = new PetrolEngine();
  const petrolCar = new Car(petrolEngine);

  const dieselEngine = new DieselEngine();
  const dieselCar = new Car(dieselEngine);

  hybridCar.start();
  petrolCar.start();
  dieselCar.start();
}

main();
