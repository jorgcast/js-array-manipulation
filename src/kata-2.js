/**
 * @param {number[]} array
 * @return {number[]}
 */
const kata2 = (array = [], position, newElement) => {
  const newArray = [...array];

  switch (position) {
    case 'add_first':
      newArray.unshift(newElement);
      break;
    case 'remove_first':
      newArray.shift();
      break;
    case 'add_last':
      newArray.push(newElement);
      break;
    case 'remove_last':
      newArray.pop();
      break;
  }

  return newArray;
};

const actions = {
  add_first(array, elem) {
    array.unshift(elem);
  },
  remove_first(array, elem) {
    array.shift();
  },
  add_last(array, elem) {
    array.push(elem);
  },
  remove_last(array, elem) {
    array.pop();
  },
};

const kata2Super = (array = [], position, newElement) => {
  actions[position](array, newElement);

  return array;
};

export {
  kata2,
  kata2Super,
};
