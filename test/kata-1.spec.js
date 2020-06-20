import assert from 'assert';

import kata1 from '../src/kata-1';

describe('#kata-1', function () {
  it('should return false hen nothing is sent', function () {
    assert.equal(kata1([]), false);
  });

  it('should return true when the array is [1, 1, 2, 2, 3, 5, 9, 9]', function () {
    assert.equal(kata1([1, 1, 2, 2, 3, 5, 9, 9]), true);
  });

  it('should return true when the array is [7, 7, 19]', function () {
    assert.equal(kata1([7, 7, 19]), true);
  });

  it('should return false when the array is [95, 114]', function () {
    assert.equal(kata1([95, 114]), false);
  });
});
