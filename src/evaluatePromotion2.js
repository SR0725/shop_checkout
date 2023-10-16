/**
 * @param {object[]} purchasedItems
 * @returns {object[]}
 */
export const evaluatePromotion2 = (purchasedItems) => {
  const nonDiscountedItems = purchasedItems.filter((item) => !item.isDiscounted);

  if (nonDiscountedItems.length < 3) {
    return purchasedItems;
  }

  return purchasedItems.map((item) => {
    if(item.isDiscounted){
      return item;
    }
    return {
      ...item,
      price: item.price - 5,
      discountPrice: 5,
      isDiscounted: true,
    }
  });
};
