/**
 * @param {string[]} array
 * @return {string[]}
 */
const kata8 = (array = [], ...otherArrays) => {
  const restArrays = otherArrays.flat();
  const totalArray = [...array, ...restArrays];
  return totalArray.sort();
};

export default kata8;
