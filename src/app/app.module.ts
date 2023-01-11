import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SingletonComponent } from './patterns/creation/singleton/singleton.component';
import { FactoryComponent } from './patterns/creation/factory/factory.component';
import { AbstractFactoryComponent } from './patterns/creation/abstract-factory/abstract-factory.component';
import { AdapterComponent } from './patterns/structural/adapter/adapter.component';
import { DecoratorComponent } from './patterns/structural/decorator/decorator.component';
import { ProxyComponent } from './patterns/structural/proxy/proxy.component';
import { CommandComponent } from './patterns/behaviour/command/command.component';
import { ObserverComponent } from './patterns/behaviour/observer/observer.component';
import { StrategyComponent } from './patterns/behaviour/strategy/strategy.component';
import { SolidComponent } from './solid/solid.component';
import { SingleResponsibilityComponent } from './solid/single-responsibility/single-responsibility.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CounterComponent } from './ngrx/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx/store/counter/counter.state';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './ngrx/store/counter/counter.effects';
@NgModule({
  declarations: [
    AppComponent,
    SingletonComponent,
    FactoryComponent,
    AbstractFactoryComponent,
    AdapterComponent,
    DecoratorComponent,
    ProxyComponent,
    CommandComponent,
    ObserverComponent,
    StrategyComponent,
    SolidComponent,
    SingleResponsibilityComponent,
    RxjsComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? [] : [],
    EffectsModule.forRoot([CounterEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
