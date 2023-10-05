/**
 * @param {object[]} purchasedItems
 * @returns {object[]}
 */
export const evaluatePromotion1 = (purchasedItems) => {
  const clonedItems = purchasedItems.map((item) => ({ ...item }));
  const combinationItems = [];

  clonedItems.forEach((currentItem, currentIndex) => {
    if (clonedItems[currentIndex].beCombined) {
      return;
    }

    const combineItem = clonedItems
      .slice(currentIndex + 1)
      .find((item) => item.id === currentItem.id && !item.beCombined);

    if (combineItem) {
      combineItem.beCombined = true;
      currentItem.combinationList = [
        ...currentItem.combinationList,
        combineItem.id,
      ];
      currentItem.isDiscount = true;
      currentItem.price = currentItem.price * 1.5;
    }
    combinationItems.push(currentItem);
  });

  return combinationItems;
};
