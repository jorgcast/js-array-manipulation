/**
 * @param {object[]} basket
 * @return {boolean}
 */
const kata6 = (basket = [], groupLabel = 'one') => {
  let products = basket.some(elem => elem.shippingCost > 0);

  if (groupLabel === 'all') {
    products = basket.every(elem => elem.shippingCost > 0);
  }

  return products;
};

export default kata6;
