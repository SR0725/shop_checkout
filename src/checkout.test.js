import { checkout } from "./checkout.js";
import productPriceMap from "./database.json";

describe("Checkout", () => {
  it("should return 0 when nothing", () => {
    const purchasedItems = [];
    const expectedTotal = 0;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });

  it("should return 45 for ['001']", () => {
    const purchasedItems = ["001"];
    const expectedTotal = 45;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });

  it("should return 105 for ['003', '002']", () => {
    const purchasedItems = ["003", "002"];
    const expectedTotal = 55 + 50;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });

  it("should return 132.5 for ['003', '002', '003']", () => {
    const purchasedItems = ["003", "002", "003"];
    const expectedTotal = 55 + 50 + 27.5;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });

  it("should return 150 for ['002', '003', '004']", () => {
    const purchasedItems = ["002", "003", "004"];
    const expectedTotal = 50 + 55 + 60 - 15;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });

  it("should return 195 for ['002', '003', '004', '004']", () => {
    const purchasedItems = ["002", "003", "004", "004"];
    const expectedTotal = 50 + 55 + 60 + 30;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });

  it("should return 232.5 for ['003', '002', '003', '003', '004']", () => {
    const purchasedItems = ["003", "002", "003", "003", "004"];
    const expectedTotal = 55 + 45 + 27.5 + 50 + 55;
    expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
  });
});
