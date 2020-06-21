/**
 * @param {string[]} array
 * @return {string[]}
 */
const kata9 = (array, propToSort) => {
  if (!array) {
    return [];
  }

  // We have to clone the array
  const newArray = JSON.parse(JSON.stringify(array));

  return newArray.sort((a, b) => a[propToSort] > b[propToSort] ? 1 : -1);
};

/**
 * @param {string[]} array
 * @return {string[]}
 */
const kata9Super = (array, propToSort) => {
  if (!array) {
    return [];
  }

  return kata9(array, propToSort).reverse();
};

export {
  kata9,
  kata9Super,
};
