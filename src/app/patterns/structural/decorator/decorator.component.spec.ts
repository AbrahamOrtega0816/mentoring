import { Product } from "./product";
import { BasePrice } from "./base-price";
import { SpecialPriceDecorator } from "./decorators/special-price.decorator";
import { VipCustomerDecorator } from "./decorators/vip-customer.decorator";

describe("Product price", () => {
    it("base price", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

      expect(true).toEqual(product.specialPrice === 0);

    });

    it("special price discount", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        specialPrice = new SpecialPriceDecorator(specialPrice);

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(true).toEqual(product.price > product.specialPrice);
    });

    it("vip customer discount", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        specialPrice = new VipCustomerDecorator(specialPrice);

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(true).toEqual(product.price > product.specialPrice);
    });

    it("special price and vip customer discount", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        specialPrice = new SpecialPriceDecorator(specialPrice);
        specialPrice = new VipCustomerDecorator(specialPrice);

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(true).toEqual(product.price > product.specialPrice);
    });
});
