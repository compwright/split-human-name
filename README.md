# split-human-name

[![Build Status](https://travis-ci.org/compwright/split-human-name.svg?branch=master)](https://travis-ci.org/compwright/split-human-name) [![Greenkeeper badge](https://badges.greenkeeper.io/compwright/split-human-name.svg)](https://greenkeeper.io/)

Split a person's name into first name and last name fields

## Features

* Splits a name into exactly two fields `{ firstName, lastName }`
* Fixes UPPERCASE, lowercase, iNVERSE CASE, and otherwise FUnkY cAse
* Handles couples ("John and Jane Doe")
* Gracefully degrades to put the entire string in `firstName` if there are multiple last names

Based on the awesome [humanparser](https://www.npmjs.com/package/humanparser) and [namecase](https://www.npmjs.com/package/namecase) packages

Online demo: http://compwright.com/demos/split-human-name

## Requirements

* Node.js 8+

## Installation

```bash
$ npm install --save split-human-name
```

## Usage Examples

### Browser

```html
<script src="https://unpkg.com/split-human-name@latest/dist/split-human-name.min.js"></script>
<script>
  console.log(window.splitHumanName('John and Jane Doe'));
</script>
```

### Node

```javascript
const splitName = require('split-human-name');
const { firstName, lastName } = splitName('John and Jane Doe');
assert.strictEquals(firstName, 'John and Jane');
assert.strictEquals(lastName, 'Doe');
```

## License

MIT
