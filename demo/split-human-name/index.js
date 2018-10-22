'use strict';

const splitName = require('split-human-name');
const csv = require('csv-stringify/lib/sync');

exports['split-human-name'] = (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    // Set CORS headers for the main request
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'POST') {
      const names = req.body.names.split('\n').map(fullName => ({
        fullName: fullName.trim(),
        ...splitName(fullName)
      }));

      res.set('Content-Type', 'text/csv');
      res.set('Content-Disposition', 'attachment; filename="split-names.csv"');
      res.send(csv(names, { header: true, quoted: true }));
    } else {
      res.set('Content-Type', 'text/plain');
      res.send('Post names in plain text, one per line');
    }
  }
};
