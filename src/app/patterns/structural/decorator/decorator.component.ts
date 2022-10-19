import { Component, OnInit } from '@angular/core';
import { Storage, StorageType } from './storage.decorator';
@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
})
export class DecoratorComponent implements OnInit {

  @Storage<number>('currentItemsPerPage', StorageType.Local, 20)
  currentItemsPerPage: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setData(): void {
    this.currentItemsPerPage = 100;
  }
  clear(): void {
    this.currentItemsPerPage = 0;
  }

}

function simpleDecorator(target: any) {
  console.log('Hello from Decorator');

  Object.defineProperty(target.prototype, 'value1', {
    value: 100,
    writable: false
  });

  Object.defineProperty(target.prototype, 'value2', {
    value: 200,
    writable: false
  });
}
