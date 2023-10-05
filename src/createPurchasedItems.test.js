import { createPurchasedItems } from "./createPurchasedItems";
import productPriceMap from "./database.json";

describe("createPurchasedItems", () => {
  it("should create a list of purchased items with correct prices", () => {
    const productIDs = ["003", "002", "003", "003", "004"];
    const expectedPurchasedItems = [
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
    ];

    const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
    expect(purchasedItems).toEqual(expectedPurchasedItems);
  });

  it("should handle an empty purchase list", () => {
    const productIDs = [];
    const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
    expect(purchasedItems).toEqual([]);
  });

  it("should handle non-existent product IDs", () => {
    const productIDs = ["006", "007"];
    const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
    expect(purchasedItems).toEqual([]);
  });
});
