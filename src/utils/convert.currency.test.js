import { convertCurrency } from "./convert.currency";
describe("convertCurrency", () => {
  it("should be convert currency correctly", async () => {
    const data = await convertCurrency(100, "USD", "IDR");

    expect(data).toBe(1553977);
  });
});
