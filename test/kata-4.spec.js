import assert from 'assert';

import kata4 from '../src/kata-4';

describe('#kata-4', function () {
  const characters = [
    { id: '1', name: 'Simba' },
    { id: '2', name: 'Timon' },
    { id: '3', name: 'Pumbaa' },
  ];

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata4());
    assert.equal(actual, '[]');
  });

  it('should add the year prop', function () {
    const actual = JSON.stringify(kata4(characters));
    const expected = JSON.stringify(['Simba', 'Timon', 'Pumbaa']);
    assert.equal(actual, expected);
  });
});
