import { createPurchasedItems } from "./createPurchasedItems";
import productPriceMap from "./database.json";
import { createItem } from "./createItem";

describe("When createPurchasedItems", () => {
  describe("Given ['003', '002', '003', '003', '004']", () => {
    it("Then return a list of purchased items", () => {
      const productIDs = ["003", "002", "003", "003", "004"];
      const expectedPurchasedItems = [
        createItem("003", "Cola", 55, 0, false),
        createItem("002", "Royal", 50, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("004", "Fanta", 60, 0, false),
      ];

      const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
      expect(purchasedItems).toEqual(expectedPurchasedItems);
    });
  });

  describe("Given Nothing", () => {
    it("Then return an empty list", () => {
      const productIDs = [];
      const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
      expect(purchasedItems).toEqual([]);
    });
  });

  describe("Given ['006', '007']", () => {
    it("Then handle non-existent product IDs", () => {
      const productIDs = ["006", "007"];
      const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
      expect(purchasedItems).toEqual([]);
    });
  });
});
