import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-single-responsibility',
  templateUrl: './single-responsibility.component.html',
  styleUrls: ['./single-responsibility.component.css']
})
export class SingleResponsibilityComponent implements OnInit {

  constructor() { }

  rxTime = new Date();
  subscription: Subscription | undefined;

  ngOnInit(): void {
        // Using RxJS Timer
        this.subscription = timer(0, 1000)
        .pipe(
          map(() => new Date()),
          share()
        )
        .subscribe(time => {
          this.rxTime = time;
        });
  }
}
