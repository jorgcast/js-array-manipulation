import assert from 'assert';

import kata7 from '../src/kata-7';

describe('#kata-7', function () {
  const humans = ['mother', 'son', 'father'];

  it('should return "" when nothing is sent', function () {
    assert.equal(kata7(), '');
  });

  it('should return "mother__son__father" for the connector "__"', function () {
    assert.equal(kata7(humans, '__'), 'mother__son__father');
  });

  it('should return "mother-son-father" for the connector "-"', function () {
    assert.equal(kata7(humans, '-'), 'mother-son-father');
  });

  it('should return "mothersonfather" when no connector is sent', function () {
    assert.equal(kata7(humans), 'mothersonfather');
  });
});
