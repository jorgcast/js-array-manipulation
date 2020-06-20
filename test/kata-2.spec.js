import assert from 'assert';

import { kata2, kata2Super } from '../src/kata-2';

describe('#kata-2', function () {
  let testArray = [1, 6, 9];

  beforeEach(function () {
    // runs before each test in this block
    testArray = [1, 6, 9];
  });

  it('should return [5] for ([], add_first, 5)', function () {
    const actual = JSON.stringify(kata2([], 'add_first', 5));
    const expected = '[5]';
    assert.equal(actual, expected);
  });

  it('should return [] for ([], remove_first)', function () {
    const actual = JSON.stringify(kata2([], 'remove_first'));
    const expected = '[]';
    assert.equal(actual, expected);
  });

  it('should return [5] for ([], add_last, 5)', function () {
    const actual = JSON.stringify(kata2([], 'add_last', 5));
    const expected = '[5]';
    assert.equal(actual, expected);
  });

  it('should return [] for ([], remove_last)', function () {
    const actual = JSON.stringify(kata2([], 'remove_last'));
    const expected = '[]';
    assert.equal(actual, expected);
  });

  it('should add 5 in the first position', function () {
    const actual = JSON.stringify(kata2([1, 6, 9], 'add_first', 5));
    const expected = '[5,1,6,9]';
    assert.equal(actual, expected);
  });

  it('should remove the first position)', function () {
    const actual = JSON.stringify(kata2([1, 6, 9], 'remove_first'));
    const expected = '[6,9]';
    assert.equal(actual, expected);
  });

  it('should add 5 in the last position', function () {
    const actual = JSON.stringify(kata2([1, 6, 9], 'add_last', 5));
    const expected = '[1,6,9,5]';
    assert.equal(actual, expected);
  });

  it('should remove the last position', function () {
    const actual = JSON.stringify(kata2([1, 6, 9], 'remove_last'));
    const expected = '[1,6]';
    assert.equal(actual, expected);
  });

  describe('Superpower', function () {
    it('should add 8 in the first position', function () {
      const actual = JSON.stringify(kata2Super([1, 6, 9], 'add_first', 8));
      const expected = '[8,1,6,9]';
      assert.equal(actual, expected);
    });

    it('should remove the first position)', function () {
      const actual = JSON.stringify(kata2Super([1, 6, 9], 'remove_first'));
      const expected = '[6,9]';
      assert.equal(actual, expected);
    });

    it('should add 8 in the last position', function () {
      const actual = JSON.stringify(kata2Super([1, 6, 9], 'add_last', 8));
      const expected = '[1,6,9,8]';
      assert.equal(actual, expected);
    });

    it('should remove the last position', function () {
      const actual = JSON.stringify(kata2Super([1, 6, 9], 'remove_last'));
      const expected = '[1,6]';
      assert.equal(actual, expected);
    });
  })
});
