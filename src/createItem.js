export const createItem = (
  id,
  name,
  originalPrice,
  discountPrice,
  isDisounted
) => ({
  id,
  name,
  price: originalPrice - discountPrice,
  originalPrice,
  discountPrice,
  isDisounted,
});
