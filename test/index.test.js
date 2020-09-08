/* eslint-env mocha */

const assert = require('assert');
const splitName = require('../src');

const names = require('./names.json');

describe('splitName()', () => {
  for (const { name, ...expected } of names) {
    it(`${name} => ${expected.firstName} | ${expected.lastName}`, () => {
      const { firstName, lastName } = splitName(name);
      assert.strictEqual(firstName, expected.firstName);
      assert.strictEqual(lastName, expected.lastName);
    });
  }
});
