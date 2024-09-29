const saludo = require('./index')

test('returns hola mundo!', () => {
  expect(saludo()).toBe("hola mundo!");
});