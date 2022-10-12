import { Component, Inject } from '@angular/core';
import PaymentType from "./enums/payment-type";
import IPaymentMethod from "./payment-method.interface";
import PaymentMethodFactory from "./payment-method-factory";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
})
export class FactoryComponent {
  public paymentType?: IPaymentMethod;
  public commission: number = 0;

  constructor(private type: PaymentType,  @Inject('amount') public amount : number) {}

  public create(): void {
    // set payment type
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

    // calculate commission
    this.commission = this.paymentType.comission * this.amount;

    // ...
  }
}
