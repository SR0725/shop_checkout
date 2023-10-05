import { evaluatePromotion2 } from "./evaluatePromotion2";

describe("evaluatePromotion2", () => {
  it("should apply Promotion 2 correctly and record discount information", () => {
    const purchasedItems = [
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
    ];

    const expectedItemsAfterPromotion = [
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      {
        id: "002",
        price: 150,
        isDiscount: true,
        combinationList: ["003", "004"],
      },
    ];

    const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
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

    const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });

  it("should handle an empty list of purchased items", () => {
    const purchasedItems = [];

    const expectedItemsAfterPromotion = [];

    const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });

  it("should handle items with multiple duplicates", () => {
    const purchasedItems = [
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "002", price: 75, isDiscount: true, combinationList: ["002"] },
      { id: "002", price: 50, isDiscount: false, combinationList: [] },
      { id: "003", price: 55, isDiscount: false, combinationList: [] },
      { id: "004", price: 60, isDiscount: false, combinationList: [] },
      { id: "001", price: 45, isDiscount: false, combinationList: [] },
    ];

    const expectedItemsAfterPromotion = [
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "003", price: 82.5, isDiscount: true, combinationList: ["003"] },
      { id: "002", price: 75, isDiscount: true, combinationList: ["002"] },
      {
        id: "002",
        price: 190,
        isDiscount: true,
        combinationList: ["003", "004", "001"],
      },
    ];

    const itemsAfterPromotion = evaluatePromotion2(purchasedItems);
    expect(itemsAfterPromotion).toEqual(expectedItemsAfterPromotion);
  });
});
