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
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './ngrx/heroes/reducers/hero-reducer';
import { ReadDeleteComponent } from './ngrx/heroes/components/read-delete/read-delete.component';
import { CreateComponent } from './ngrx/heroes/components/create/create.component';

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
    ReadDeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      { heroes: heroReducer }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
