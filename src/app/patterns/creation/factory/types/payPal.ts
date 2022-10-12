import IPaymentMethod from "../payment-method.interface";

export default class payPal implements IPaymentMethod {
    get comission(): number {
        return 0.06;
    }
}
