import assert from 'assert';

import { kata9, kata9Super } from '../src/kata-9';

describe('#kata-9', function () {
  const products = [
    { name: 'roomba', category: 'home' },
    { name: 'iPad', category: 'electronics' },
    { name: 'lego Star Wars', category: 'toys' },
  ];

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata9());
    assert.equal(actual, '[]');
  });

  it('should sort the products by name', function () {
    const actual = JSON.stringify(kata9(products, 'name'));
    const expected = JSON.stringify([
      { name: 'iPad', category: 'electronics' },
      { name: 'lego Star Wars', category: 'toys' },
      { name: 'roomba', category: 'home' },
    ]);
    assert.equal(actual, expected);
  });

  it('should sort the products by category', function () {
    const actual = JSON.stringify(kata9(products, 'category'));
    const expected = JSON.stringify([
      { name: 'iPad', category: 'electronics' },
      { name: 'roomba', category: 'home' },
      { name: 'lego Star Wars', category: 'toys' },
    ]);
    assert.equal(actual, expected);
  });

  describe('Superpower', function () {
    it('should revert the sorted products by name', function () {
      const actual = JSON.stringify(kata9Super(products, 'name'));
      const expected = JSON.stringify([
        { name: 'roomba', category: 'home' },
        { name: 'lego Star Wars', category: 'toys' },
        { name: 'iPad', category: 'electronics' },
      ]);
      assert.equal(actual, expected);
    });

    it('should revert the sorted products by category', function () {
      const actual = JSON.stringify(kata9Super(products, 'category'));
      const expected = JSON.stringify([
        { name: 'lego Star Wars', category: 'toys' },
        { name: 'roomba', category: 'home' },
        { name: 'iPad', category: 'electronics' },
      ]);
      assert.equal(actual, expected);
    });
  });
});
