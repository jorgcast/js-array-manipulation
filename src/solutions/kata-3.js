/**
 * @param {object[]} array
 * @return {object[]}
 */
const kata3 = (array = [], year) => {
  const newArray = [...array];

  newArray.forEach((elem) => {
    elem.year = year;
  });

  return newArray;
};

export default kata3;
