/**
 * @param {object[]} users
 * @return {object[][]}
 */
const kata5 = (users, id, newFirstName) => {
  if (!users) {
    return [];
  }

  // We have to clone the array
  const newUsers = JSON.parse(JSON.stringify(users));

  const modifiedUser = newUsers.find(user => user.id === id);
  modifiedUser.firstname = newFirstName;

  return [newUsers, users];
};

export default kata5;
