import assert from 'assert';

import kata8 from '../src/kata-8';

describe('#kata-8', function () {
  const group1 = ['Hulk', 'Thor'];
  const group2 = ['Captain (North) America', 'IronMan']
  const group3 = ['Black Widow', 'Hawkeye'];

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata8());
    assert.equal(actual, '[]');
  });

  it('should return the 2 arrays in one', function () {
    const actual = JSON.stringify(kata8(group1, group2));
    const expected = JSON.stringify([
      'Captain (North) America',
      'Hulk',
      'IronMan',
      'Thor',
    ]);
    assert.equal(actual, expected);
  });

  it('should return the 3 arrays in one', function () {
    const actual = JSON.stringify(kata8(group1, group2, group3));
    const expected = JSON.stringify([
      'Black Widow',
      'Captain (North) America',
      'Hawkeye',
      'Hulk',
      'IronMan',
      'Thor',
    ]);
    assert.equal(actual, expected);
  });
});
