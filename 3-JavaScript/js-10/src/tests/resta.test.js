const resta = require('../js/resta');

test('restar 100 - 1 debe ser 99', () => {
    expect(resta(100,1) ).toBe(99);
});