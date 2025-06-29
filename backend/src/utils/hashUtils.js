const crypto = require('crypto');

function computeHash({ data, timestamp, prevHash }) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(data) + timestamp + prevHash)
    .digest('hex');
}

module.exports = { computeHash };
