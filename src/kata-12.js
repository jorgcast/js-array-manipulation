/**
 * @param {number[]} array
 * @return {number}
 */
const kata12 = (array = []) => {
  const reducedArray = array.reduce((acc, current) => acc + current, 0);

  return reducedArray;
};

/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata12Super = (array = []) => {
  const reducedArray = array.reduce((acc, current) => acc + current.price, 0);

  return reducedArray;
};

export {
  kata12,
  kata12Super,
};
