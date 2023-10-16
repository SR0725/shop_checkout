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
          ...product,
          id,
          originalPrice: product.price,
          discountPrice: 0,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  return purchasedItems;
};
