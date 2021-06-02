/* eslint-env mocha */

const assert = require('assert');
const splitName = require('../src');

const names = require('./names.json');

for (const { name, ...expected } of names) {
  test(`${name} => ${expected.firstName} | ${expected.lastName}`, () => {
    const { firstName, lastName } = splitName(name);
    assert.strictEqual(firstName, expected.firstName);
    assert.strictEqual(lastName, expected.lastName);
  });
}
