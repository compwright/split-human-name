import assert from 'node:assert'
import { createRequire } from 'node:module'
import { splitName } from './index.js'

const require = createRequire(import.meta.url)
const names = require('../resources/names.json')

describe('splitName()', () => {
  for (const { name, ...expected } of names) {
    test(`${name} => ${expected.firstName} | ${expected.lastName}`, () => {
      const { firstName, lastName } = splitName(name)
      assert.strictEqual(firstName, expected.firstName)
      assert.strictEqual(lastName, expected.lastName)
    })
  }
})
