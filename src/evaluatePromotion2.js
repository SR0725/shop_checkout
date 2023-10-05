/**
 * @param {object[]} purchasedItems
 * @returns {object[]}
 */
export const evaluatePromotion2 = (purchasedItems) => {
  const clonedItems = purchasedItems.map((item) => ({ ...item }));

  const nonDiscountedItems = clonedItems.filter((item) => !item.isDiscount);

  if (nonDiscountedItems.length < 3) {
    return clonedItems;
  }

  const [firstNonDiscountedItem, ...otherNonDiscountedItems] =
    nonDiscountedItems;
  const combinationIds = otherNonDiscountedItems.map((item) => item.id);
  const combinationPrice = otherNonDiscountedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  firstNonDiscountedItem.isDiscount = true;
  firstNonDiscountedItem.price +=
    combinationPrice - nonDiscountedItems.length * 5;
  firstNonDiscountedItem.combinationList = [
    ...(firstNonDiscountedItem.combinationList || []),
    ...combinationIds,
  ];

  return clonedItems.filter((item) => item.isDiscount);
};
