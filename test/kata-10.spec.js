import assert from 'assert';

import kata10 from '../src/kata-10';

describe('#kata-10', function () {
  const numbers = [1, 2, 3];

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata10());
    assert.equal(actual, '[]');
  });

  it('should pick the first position', function () {
    const actual = JSON.stringify(kata10(numbers, 0, 1));
    assert.equal(actual, '[1]');
  });

  it('should pick the middle position', function () {
    const actual = JSON.stringify(kata10(numbers, 1, 2));
    assert.equal(actual, '[2]');
  });

  it('should remove the first position', function () {
    const actual = JSON.stringify(kata10(numbers, 1));
    assert.equal(actual, '[2,3]');
  });
});
