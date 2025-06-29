const { computeHash } = require('../utils/hashUtils');

let ledger = [];

function addEntry(data) {
  const prevHash = ledger.length ? ledger[ledger.length - 1].hash : 'GENESIS';
  const timestamp = new Date().toISOString();
  const entry = { data, timestamp, prevHash };
  entry.hash = computeHash(entry);
  ledger.push(entry);
  return entry;
}

function getAllEntries() {
  return ledger;
}

function verifyLedger() {
  for (let i = 1; i < ledger.length; i++) {
    const { data, timestamp, prevHash } = ledger[i];
    const expectedPrevHash = ledger[i - 1].hash;
    if (prevHash !== expectedPrevHash) return false;
    const recalculatedHash = computeHash({ data, timestamp, prevHash });
    if (ledger[i].hash !== recalculatedHash) return false;
  }
  return true;
}

module.exports = { addEntry, getAllEntries, verifyLedger };
