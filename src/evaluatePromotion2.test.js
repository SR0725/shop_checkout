import { evaluatePromotion2 } from "./evaluatePromotion2";
import { createItem } from "./createItem";

describe("When evaluating Promotion 2", () => {
  describe("Given 3 colas, 2 Royals, and 1 Fanta", () => {
    it("Then apply 5 dollar discount to other no discount product", () => {
      const purchasedItems = [
        createItem("003", "Cola", 55, 0, true),
        createItem("002", "Royal", 50, 0, false),
        createItem("003", "Cola", 55, 27.5, true),
        createItem("003", "Cola", 55, 0, false),
        createItem("004", "Fanta", 60, 0, false),
      ];

      const expectedDiscountedItems =[
        createItem("003", "Cola", 55, 0, true),
        createItem("002", "Royal", 50, 5, true),
        createItem("003", "Cola", 55, 27.5, true),
        createItem("003", "Cola", 55, 5, true),
        createItem("004", "Fanta", 60, 5, true),
      ];

      const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });

  describe("Given 1 colas, 1 Royals", () => {
    it("Then not apply any discount", () => {
      const purchasedItems = [
        createItem("002", "Royal", 50, 0, false),
        createItem("003", "Cola", 55, 0, false),
      ];

      const expectedDiscountedItems = purchasedItems;

      const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });

  describe("Given Nothing", () => {
    it("Then handle an empty list of products gracefully", () => {
      const purchasedItems = [];
      const expectedDiscountedItems = [];

      const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });
});
