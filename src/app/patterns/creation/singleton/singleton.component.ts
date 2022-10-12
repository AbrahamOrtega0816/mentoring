import { Component } from '@angular/core';
import config from './singleton.json';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
})
export class SingletonComponent {
  private static instance: SingletonComponent;

  private static _apiUrl: string;

  constructor() {}

  private static initialize(): void {
    this._apiUrl = config.api;
  }

  public static getInstance(): SingletonComponent {
    if (!this.instance) {
      this.initialize();
      this.instance = new SingletonComponent();
    }

    return this.instance;
  }

  get apiUrl(): string {
    return SingletonComponent._apiUrl;
  }
}
