import PaymentType from "./enums/payment-type";
import IPaymentMethod from "./payment-method.interface";
import MasterCard from "./types/masterCard";
import PayPal from "./types/payPal";
import Visa from "./types/visa";

export default class PaymentMethodFactory {
    public static createPaymentType(type: PaymentType): IPaymentMethod {
        if (type === PaymentType.Mastercard) {
            return new MasterCard();
        }

        if (type === PaymentType.PayPal) {
            return new PayPal();
        }

        if (type === PaymentType.Visa) {
            return new Visa();
        }

        throw new Error("Invalid payment method type.");
    }
}
