import { DecoratorComponent } from "./decorator.component";

const decorator = new DecoratorComponent();

describe("Decorator Component", () => {
  it("value must be saved in localStorage", async () => {

    decorator.setData()

    const value = decorator.currentItemsPerPage;

    expect(true).toBe(value === Number(localStorage.getItem("currentItemsPerPage")));
});
});
