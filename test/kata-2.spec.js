import assert from 'assert';

import kata2 from '../src/kata-2';

describe('#kata-2', function () {
  it('should return 0 when nothing is sent', function () {
    assert.equal(kata2(), 1);
  });
  it('should return -1 when the value is not present', function () {
    assert.equal(kata2(2), 2);
  });
});
