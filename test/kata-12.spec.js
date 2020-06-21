import assert from 'assert';

import { kata12, kata12Super } from '../src/kata-12';

describe('#kata-12', function () {
  const simpleTicket = [5, 11, 4, 18];

  it('should return 0 when nothing is sent', function () {
    assert.equal(kata12(), 0);
  });

  it('should remove 1 element and insert an 8 at position 0', function () {
    assert.equal(kata12(simpleTicket), 38);
  });

  describe('#kata-12', function () {
    const fullTicket = [
      { product: 'cheese steak jimmys', price: 7 },
      { product: 'natural wonders', price: 5 },
      { product: 'aegis', price: 14 },
      { product: 'rock on', price: 9 },
    ];

    it('should return 0 when nothing is sent', function () {
      assert.equal(kata12Super(), 0);
    });

    it('should remove 1 element and insert an 8 at position 0', function () {
      assert.equal(kata12Super(fullTicket), 35);
    });
  });
});
