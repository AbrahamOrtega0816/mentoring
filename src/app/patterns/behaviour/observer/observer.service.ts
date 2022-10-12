import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  subject$ = new BehaviorSubject([`test 0`]);

  getSubject(){
    return this.subject$.getValue();
  }

  setSubject(val : string[]){
    return this.subject$.next(val);
  }
}
