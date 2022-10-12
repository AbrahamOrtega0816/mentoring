import { ObserverComponent } from './observer.component';
import { ObserverService } from './observer.service';

describe('ObserverComponent', () => {

  const observerService = new ObserverService()
  const observerComponent = new ObserverComponent(observerService)

  it('A new value must be added to the observer array', () => {
    let arraySubject:string[] = []
    observerService.subject$.subscribe((val)=>{
      arraySubject = val
    })
    observerComponent.add();
    const nestArraySubject = observerService.getSubject();
    expect(true).toBe(nestArraySubject === arraySubject);
  });
});
