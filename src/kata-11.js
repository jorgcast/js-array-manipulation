/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata11 = (array = [], start, quantity, ...newElems) => {
  array.splice(start, quantity, ...newElems);

  return array;
};

export default kata11;
