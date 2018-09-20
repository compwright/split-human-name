const assert = require('assert');
const splitName = require('../');

const names = require('./names.json');

describe('splitName()', () => {
  for (let { name, ...expected } of names) {
    it(`${name} => ${expected.firstName} | ${expected.lastName}`, () => {
      const { firstName, lastName } = splitName(name);
      assert.strictEqual(firstName, expected.firstName);
      assert.strictEqual(lastName, expected.lastName);
    });
  }
});
