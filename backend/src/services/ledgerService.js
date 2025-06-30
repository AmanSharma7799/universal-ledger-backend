const { hash, calculateMerkleRoot } = require("../utils/merkle");

let ledger = [
  {
    data: { genesis: true },
    timestamp: new Date().toISOString(),
    prevHash: "NONE",
    hash: hash(
      JSON.stringify({
        data: { genesis: true },
        timestamp: new Date().toISOString(),
        prevHash: "NONE",
      })
    ),
  },
];

function computeHash({ data, timestamp, prevHash }) {
  return hash(JSON.stringify(data) + timestamp + prevHash);
}

function addEntry(entryData) {
  const last = ledger[ledger.length - 1];
  const prevHash = last.hash;
  const timestamp = new Date().toISOString();
  const entryHash = computeHash({ data: entryData, timestamp, prevHash });
  const entry = { data: entryData, timestamp, prevHash, hash: entryHash };
  ledger.push(entry);
  return entry;
}

function getAllEntries() {
  return ledger;
}

function verifyLedger() {
  for (let i = 1; i < ledger.length; i++) {
    const prev = ledger[i - 1];
    const curr = ledger[i];
    if (curr.prevHash !== prev.hash) return false;
    const expectedHash = computeHash({
      data: curr.data,
      timestamp: curr.timestamp,
      prevHash: curr.prevHash,
    });
    if (expectedHash !== curr.hash) return false;
  }
  return true;
}

function verifyLedgerVerbose() {
  for (let i = 1; i < ledger.length; i++) {
    const curr = ledger[i];
    const prev = ledger[i - 1];
    if (curr.prevHash !== prev.hash) {
      return {
        valid: false,
        reason: "prevHash mismatch",
        index: i,
        expectedPrevHash: prev.hash,
        actualPrevHash: curr.prevHash,
      };
    }
    const expectedHash = computeHash({
      data: curr.data,
      timestamp: curr.timestamp,
      prevHash: curr.prevHash,
    });
    if (expectedHash !== curr.hash) {
      return {
        valid: false,
        reason: "hash mismatch",
        index: i,
        expectedHash,
        actualHash: curr.hash,
      };
    }
  }
  return { valid: true };
}

function getMerkleRoot() {
  const hashes = ledger.map((entry) => entry.hash);
  return calculateMerkleRoot(hashes);
}

function resetLedger() {
  ledger = [
    {
      data: { genesis: true },
      timestamp: new Date().toISOString(),
      prevHash: "NONE",
      hash: computeHash({
        data: { genesis: true },
        timestamp: new Date().toISOString(),
        prevHash: "NONE",
      }),
    },
  ];
}

module.exports = {
  addEntry,
  getAllEntries,
  verifyLedger,
  verifyLedgerVerbose,
  getMerkleRoot,
  resetLedger,
};
