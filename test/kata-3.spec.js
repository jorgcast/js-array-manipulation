import assert from 'assert';

import kata3 from '../src/kata-3';

describe('#kata-3', function () {
  const clients = [
    { id: '1', name: 'Solid Snake' },
    { id: '2', name: 'Liquid Snake' },
    { id: '3', name: 'Solidus Snake' },
  ];

  const clientsWithYear = [
    { id: '1', name: 'Solid Snake', year: 2010 },
    { id: '2', name: 'Liquid Snake', year: 2010 },
    { id: '3', name: 'Solidus Snake', year: 2010 },
  ];

  const expected = JSON.stringify([
    { id: '1', name: 'Solid Snake', year: 2020 },
    { id: '2', name: 'Liquid Snake', year: 2020 },
    { id: '3', name: 'Solidus Snake', year: 2020 },
  ]);

  it('should return [] when nothing is sent', function () {
    const actual = JSON.stringify(kata3(), 2020);
    assert.equal(actual, '[]');
  });

  it('should add the year prop', function () {
    const actual = JSON.stringify(kata3(clients, 2020));
    assert.equal(actual, expected);
  });

  it('should modify the year prop', function () {
    const actual = JSON.stringify(kata3(clientsWithYear, 2020));
    assert.equal(actual, expected);
  });
});
