import { PaymentMethodHandler } from "./payment-method.handler";
import { CulquiCommand } from "./payment-commands/culqui.command";
import { CreditCardDto } from "./payment-commands/dto/credit-card.dto";

describe("Payment Method Handler", () => {
    it("success case", () => {
        const paymentMethodHandler = new PaymentMethodHandler();

        const creditCard = new CreditCardDto(
            "visa",
            "Eduardo Rodríguez Patiño",
            "xxx-xxx-xxx-xxx",
            "xxx",
            300.00
        );

        paymentMethodHandler.process(new CulquiCommand(creditCard));
    });
});
