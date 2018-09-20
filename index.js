const nameCase = require('@compwright/namecase');
const human = require('humanparser');

function combineFullName(parts) {
  return (combineFirstName(parts) + ' ' + combineLastName(parts)).trim();
}

function combineFirstName({ salutation, firstName, middleName }) {
  return [salutation, firstName, middleName].filter(s => !!s).join(' ').trim();
}

function combineLastName({ lastName, suffix }) {
  return lastName + (suffix ? ', ' + suffix : '');
}

function normalizeNameWithTitle(parts, i, names) {
  // { salutation: 'Dr', lastName: 'John' } => { salutation: 'Dr', firstName: 'John' }
  if (!parts.firstName && parts.lastName && i === 0 && names.length > 1) {
    parts.firstName = parts.lastName;
    delete parts.lastName;
  }
  return parts;
}

function normalizeMiddleName(parts, i, names) {
  // { firstName: 'Danial', lastName: 'P.' } => { firstName: 'Danial', middleName: 'P.' }
  if (!parts.middleName && (/\b[A-Z]{1}\.?\b/i).test(parts.lastName) && i === 0 && names.length > 1) {
    parts.middleName = parts.lastName;
    delete parts.lastName;
  }
  return parts;
}

const splitter = / and | & /i;

function splitName(name) {
  // Extract the first "and" or &
  const conjuction = splitter.test(name) && (
    ' ' + name.match(splitter)[0].trim().toLowerCase() + ' '
  );

  const names = name
    .split(splitter)
    .map(nameCase)
    .map(human.parseName)
    .map(normalizeNameWithTitle)
    .map(normalizeMiddleName);
  
  // Curly & Moe & Larry
  if (names.length > 2) {
    return {
      firstName: nameCase(name),
      lastName: ''
    };
  }

  if (names.length === 2) {
    let firstName = names.map(combineFirstName).join(conjuction);
    let lastName = '';

    // John Smith and Mary Smith
    if (names[0].lastName === names[1].lastName) {
      lastName = combineLastName(names[1]);
    // John and Mary Smith
    } else if (!names[0].lastName) {
      lastName = combineLastName(names[1]);
    // John Smith and Mary
    } else if (!names[1].lastName) {
      lastName = combineLastName(names[0]);
    // John Smith and Jane Doe
    } else {
      firstName = nameCase(name);
      lastName = '';
    }

    return { firstName, lastName };
  }

  return {
    firstName: combineFirstName(names[0]),
    lastName: combineLastName(names[0])
  };
}

module.exports = splitName;

module.exports.combineFirstName = combineFirstName;
module.exports.combineLastName = combineLastName;
module.exports.combineFullName = combineFullName;
