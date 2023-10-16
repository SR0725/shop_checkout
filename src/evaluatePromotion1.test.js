import { evaluatePromotion1 } from "./evaluatePromotion1";
import { createItem } from "./createItem";

describe("When evaluating Promotion 1", () => {
  describe("Given 3 colas, 2 Royals, and 1 Fanta", () => {
    it("Then apply 50% discount to second cola", () => {
      const purchasedItems = [
        createItem("003", "Cola", 55, 0, false),
        createItem("002", "Royal", 50, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("004", "Fanta", 60, 0, false),
      ];

      const expectedDiscountedItems = [
        createItem("003", "Cola", 55, 0, true),
        createItem("002", "Royal", 50, 0, false),
        createItem("003", "Cola", 55, 27.5, true),
        createItem("003", "Cola", 55, 0, false),
        createItem("004", "Fanta", 60, 0, false),
      ];

      const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });

  describe("Given 1 colas, 1 Royals", () => {
    it("Then not apply any discount", () => {
      const purchasedItems = [
        createItem("003", "Cola", 55, 0, false),
        createItem("002", "Royal", 50, 0, false),
      ];

      const expectedDiscountedItems = purchasedItems;

      const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });

  describe("Given Nothing", () => {
    it("Then return an empty list", () => {
      const purchasedItems = [];
      const expectedDiscountedItems = [];

      const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });

  describe("Given 6 colas, 1 Royals", () => {
    it("Then apply a 50% discount to second and third and sixth cola", () => {
      const purchasedItems = [
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("003", "Cola", 55, 0, false),
        createItem("004", "Fanta", 60, 0, false),
      ];

      const expectedDiscountedItems = [
        createItem("003", "Cola", 55, 0, true),
        createItem("003", "Cola", 55, 27.5, true),
        createItem("003", "Cola", 55, 0, true),
        createItem("003", "Cola", 55, 27.5, true),
        createItem("003", "Cola", 55, 0, true),
        createItem("003", "Cola", 55, 27.5, true),
        createItem("004", "Fanta", 60, 0, false),
      ];


      const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
      expect(itemsAfterPromotion).toEqual(expectedDiscountedItems);
    });
  });
});
