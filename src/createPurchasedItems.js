/**
 * @param {string[]} productIDs
 * @param {object} productPriceMap
 * @returns {object[]}
 */
export const createPurchasedItems = (productIDs, productPriceMap) => {
  const purchasedItems = productIDs
    .map((id) => {
      const product = productPriceMap.products[id];
      if (product && typeof product === "object" && product.price) {
        return {
          id,
          price: product.price,
          isDiscount: false,
          combinationList: [],
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  return purchasedItems;
};
