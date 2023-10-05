import { createPurchasedItems } from "./createPurchasedItems";
import { evaluatePromotion1 } from "./evaluatePromotion1";
import { evaluatePromotion2 } from "./evaluatePromotion2";
import { pipe } from "./pipe";

/**
 *
 * @param {string[]} productIDs
 * @param {Object} productPriceMap
 * @returns number
 */
export const checkout = (productIDs = [], productPriceMap) => {
  if (!productPriceMap || typeof productPriceMap !== "object") {
    throw new Error("Invalid productPriceMap");
  }
  
  const purchasedItems = createPurchasedItems(productIDs, productPriceMap);
  const discountedItems = pipe(
    evaluatePromotion1,
    evaluatePromotion2
  )(purchasedItems);

  const total = Object.values(discountedItems).reduce(
    (total, item) => total + item.price,
    0
  );

  return total;
};
