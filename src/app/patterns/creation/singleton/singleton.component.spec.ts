import { SingletonComponent } from './singleton.component';

const config = SingletonComponent.getInstance()

describe('SingletonComponent', () => {
  it("Objects shoild be not null",()=>{
    expect(config !== null).toEqual(true)
  });

  it("object should be equals", ()=>{
    let config2 = SingletonComponent.getInstance();

    expect(config === config2).toEqual(true)
  })
});
