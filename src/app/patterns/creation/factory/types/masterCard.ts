import IPaymentMethod from "../payment-method.interface";

export default class masterCard implements IPaymentMethod {
    get comission(): number {
        return 0.04;
    }
}
