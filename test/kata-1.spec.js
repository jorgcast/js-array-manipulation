import assert from 'assert';

import kata1 from '../src/kata-1';

describe('#kata-1', function () {
  it('should return 0 when nothing is sent', function () {
    assert.equal(kata1(), 0);
  });
  it('should return 5 when the value is 5', function () {
    assert.equal(kata1(5), 5);
  });
});
