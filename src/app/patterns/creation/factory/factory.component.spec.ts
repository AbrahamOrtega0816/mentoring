import { FactoryComponent } from './factory.component';
import PaymentType from "./enums/payment-type";

import Visa from "./types/visa";
import MasterCard from "./types/masterCard";
import PayPal from "./types/payPal";

let order1 = new FactoryComponent(PaymentType.Visa, 100),
    order2 = new FactoryComponent(PaymentType.Mastercard, 100),
    order3 = new FactoryComponent(PaymentType.PayPal, 100);

order1.create();
order2.create();
order3.create();

describe("Order - Visa", () => {
    it("Order must be paid by visa", () => {
        expect(true).toEqual(order1.paymentType instanceof Visa);
    });

    it("Order commission must be 5", () => {
        expect(5).toEqual(order1.commission);
    });
});

describe("Order - Mastercard", () => {
    it("Order must be paid by mastercard", () => {
        expect(true).toEqual(order2.paymentType instanceof MasterCard);
    });

    it("Order commission must be 4", () => {
        expect(4).toEqual(order2.commission);
    });
});

describe("Order - PayPal", () => {
    it("Order must be paid by paypal", () => {
        expect(true).toEqual(order3.paymentType instanceof PayPal);
    });

    it("Order commission must be 6", () => {
        expect(6).toEqual(order3.commission);
    });
});
