export const createItem = (
  id,
  name,
  originalPrice,
  discountPrice,
  isDiscounted
) => ({
  id,
  name,
  price: originalPrice - discountPrice,
  originalPrice,
  discountPrice,
  isDiscounted,
});
