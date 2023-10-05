import { evaluatePromotion1 } from "./evaluatePromotion1";

describe("evaluatePromotion1", () => {
  it("should apply Promotion 1 correctly and record discount information", () => {
    const purchasedItems = [
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
    ];

    const expectedItemsAfterPromotion = [
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
    ];

    const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });

  it("should handle items with no discount", () => {
    const purchasedItems = [
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
    ];

    const expectedItemsAfterPromotion = [
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
    ];

    const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });

  it("should handle an empty list of purchased items", () => {
    const purchasedItems = [];

    const expectedItemsAfterPromotion = [];

    const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });

  it("should handle items with multiple duplicates", () => {
    const purchasedItems = [
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
    ];

    const expectedItemsAfterPromotion = [
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "002", price: 75, isDiscount: true, combinationList: ["002"] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
    ];

    const itemsAfterPromotion = evaluatePromotion1(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });
});
