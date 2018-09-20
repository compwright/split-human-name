# split-human-name

[![Build Status](https://travis-ci.org/compwright/split-human-name.svg?branch=master)](https://travis-ci.org/compwright/split-human-name)

Split a person's name into first name and last name fields

## Features

* Splits a name into exactly two fields `{ firstName, lastName }`
* Fixes UPPERCASE, lowercase, iNVERSE CASE, and otherwise FUnkY cAse
* Handles couples ("John and Jane Doe")
* Gracefully degrades to put the entire string in `lastName` if it cannot be parsed (such as a company name, or more than two names)

Based on the awesome [humanparser](https://www.npmjs.com/package/humanparser) and [namecase](https://www.npmjs.com/package/namecase) packages

## Requirements

* Node.js 8+

## Installation

```bash
$ npm install --save split-human-name
```

## Usage

```javascript
const splitName = require('split-human-name');
const { firstName, lastName } = splitName('John and Jane Doe');
assert.strictEquals(firstName, 'John and Jane');
assert.strictEquals(lastName, 'Doe');
```

## License

MIT