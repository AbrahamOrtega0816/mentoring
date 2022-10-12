import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObserverService } from './observer.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
})
export class ObserverComponent implements OnInit {

  private subscription = new Subscription();

  constructor(private observerService : ObserverService) { }

  ngOnInit(): void {
    const sub = this.observerService.subject$.subscribe(console.log);
    this.subscription.add(sub)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  add(){
   this.observerService.setSubject([...this.observerService.getSubject(),`test ${this.observerService.getSubject().length}`])
  }

}
