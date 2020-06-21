/**
 * @param {number[]} array
 * @return {boolean}
 */
const kata1 = (array = []) => {
  const filteredArray = [...new Set(array)];

  return filteredArray.length < array.length;
};

export default kata1;
