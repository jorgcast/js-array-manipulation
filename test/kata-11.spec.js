import assert from 'assert';

import kata11 from '../src/kata-11';

describe('#kata-11', function () {
  let numbers = [1, 2, 3];

  beforeEach(function () {
    numbers = [1, 2, 3];
  });

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata11());
    assert.equal(actual, '[]');
  });

  it('should remove 1 element and insert an 8 at position 0', function () {
    const actual = JSON.stringify(kata11(numbers, 0, 1, 8));
    assert.equal(actual, '[8,2,3]');
  });

  it('should leave the array untouched', function () {
    const actual = JSON.stringify(kata11(numbers, 7, 1));
    assert.equal(actual, '[1,2,3]');
  });

  it('should remove 3 elements and insert a 5 at position 0', function () {
    const actual = JSON.stringify(kata11(numbers, 0, 3, 5));
    assert.equal(actual, '[5]');
  });

  it('should remove 0 elements and insert a 6 and a 4 at position 1', function () {
    const actual = JSON.stringify(kata11(numbers, 1, 0, 6, 4));
    assert.equal(actual, '[1,6,4,2,3]');
  });
});
