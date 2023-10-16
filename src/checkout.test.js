import { checkout } from "./checkout.js";
import productPriceMap from "./database.json";
describe("When checkout", () => {
  describe("Given no items", () => {
    it("Then return 0", () => {
      const purchasedItems = [];
      const expectedTotal = 0;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });

  describe("Given ['001']", () => {
    it("Then return 45", () => {
      const purchasedItems = ["001"];
      const expectedTotal = 45;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });

  describe("Given ['003', '002']", () => {
    it("Then return 105", () => {
      const purchasedItems = ["003", "002"];
      const expectedTotal = 55 + 50;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });

  describe("Given ['003', '002', '003']", () => {
    it("Then return 55 + 50 + 27.5", () => {
      const purchasedItems = ["003", "002", "003"];
      const expectedTotal = 55 + 50 + 27.5;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });

  describe("Given ['002', '003', '004']", () => {
    it("Then return 50 + 55 + 60 - 15", () => {
      const purchasedItems = ["002", "003", "004"];
      const expectedTotal = 50 + 55 + 60 - 15;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });

  describe("Given ['002', '003', '004', '004']", () => {
    it("Then return 50 + 55 + 60 + 30", () => {
      const purchasedItems = ["002", "003", "004", "004"];
      const expectedTotal = 50 + 55 + 60 + 30;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });

  describe("Given ['003', '002', '003', '003', '004']", () => {
    it("Then return 55 + 45 + 27.5 + 50 + 55", () => {
      const purchasedItems = ["003", "002", "003", "003", "004"];
      const expectedTotal = 55 + 45 + 27.5 + 50 + 55;
      expect(checkout(purchasedItems, productPriceMap)).toBe(expectedTotal);
    });
  });
});
