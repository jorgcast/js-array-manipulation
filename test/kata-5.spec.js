import assert from 'assert';

import kata5 from '../src/kata-5';

describe('#kata-5', function () {
  let users = [];

  beforeEach(function () {
    users = [
      { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
      { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ];
  })

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata5());
    assert.equal(actual, '[]');
  });

  it('should add the name to id 1', function () {
    const actual = JSON.stringify(kata5(users, '1', 'Tiny Rick'));
    const expected = JSON.stringify([[
      { id: '1', firstname: 'Tiny Rick', lastname: 'Sanchez' },
      { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ], users]);
    assert.equal(actual, expected);
  });

  it('should add the name to id 2', function () {
    const actual = JSON.stringify(kata5(users, '2', 'Evil Morty'));
    const expected = JSON.stringify([[
      { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
      { id: '2', firstname: 'Evil Morty', lastname: 'Smith' },
    ], users]);
    assert.equal(actual, expected);
  });
});
