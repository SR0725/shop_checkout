/**
 * @param {object[]} purchasedItems
 * @returns {object[]}
 */
export const evaluatePromotion1 = (purchasedItems) => {
  const cloneItems = purchasedItems.map((item) => ({ ...item }));

  for (const [currentIndex, currentItem] of cloneItems.entries()) {
    if (currentItem.isDiscounted) {
      continue;
    }

    const promotionItem = cloneItems.find(
      (item, index) =>
        index > currentIndex &&
        !item.isDiscounted &&
        item.id === currentItem.id
    );
    const debug = cloneItems.findIndex(
      (item, index) =>
        index > currentIndex && !item.isDiscounted && item.id === currentItem.id
    );
    if (promotionItem) {
      promotionItem.isDiscounted = true;
      currentItem.isDiscounted = true;
      promotionItem.discountPrice = promotionItem.originalPrice / 2;
      promotionItem.price = promotionItem.price - promotionItem.discountPrice;
    }
  }
  return cloneItems;
};
