# split-human-name

[![Download Status](https://img.shields.io/npm/dm/split-human-name.svg?style=flat-square)](https://www.npmjs.com/package/split-human-name)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

Split a person's name into first name and last name fields

## Features

* Splits a name into exactly two fields `{ firstName, lastName }`
* Fixes UPPERCASE, lowercase, iNVERSE CASE, and otherwise FUnkY cAse
* Handles couples ("John and Jane Doe")
* Gracefully degrades to put the entire string in `firstName` if there are multiple last names

Based on the awesome [humanparser](https://www.npmjs.com/package/humanparser) and [namecase](https://www.npmjs.com/package/namecase) packages

Online demo: http://compwright.com/demos/split-human-name

## Requirements

As of v3, this is an ESM-only package with named imports.

* Node.js 24+

## Installation

```bash
$ npm install --save split-human-name
```

## Usage Examples

```javascript
import { splitName } from 'split-human-name';
const { firstName, lastName } = splitName('John and Jane Doe');
assert.strictEquals(firstName, 'John and Jane');
assert.strictEquals(lastName, 'Doe');
```

## License

MIT
