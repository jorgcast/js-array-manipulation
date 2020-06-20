import assert from 'assert';

import kata6 from '../src/kata-6';

describe('#kata-6', function () {
  const basket = [
    { id: '1', name: 'PokeBall', shippingCost: 0 },
    { id: '2', name: 'SuperBall', shippingCost: 3 },
    { id: '3', name: 'UltraBall', shippingCost: 5 },
  ];

  it('should return false when nothing is sent', function () {
    assert.equal(kata6(), false);
  });

  it('should return false for all the shippingCosts > 0', function () {
    assert.equal(kata6(basket, 'all'), false);
  });

  it('should return true for one or more shippingCost > 0', function () {
    assert.ok(kata6(basket));
  });
});
