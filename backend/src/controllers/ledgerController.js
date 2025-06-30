const {
  addEntry,
  getAllEntries,
  verifyLedger,
  verifyLedgerVerbose,
  resetLedger,
} = require("../services/ledgerService");

exports.addEntry = (req, res) => {
  const { data } = req.body;
  const entry = addEntry(data);
  res.json(entry);
};

exports.getEntries = (req, res) => {
  res.json(getAllEntries());
};

exports.verifyLedger = (req, res) => {
  const verbose = req.query.verbose === "true";
  const result = verbose ? verifyLedgerVerbose() : { valid: verifyLedger() };
  res.json(result);
};

exports.resetLedger = (req, res) => {
  resetLedger();
  res.json({ status: "ledger reset" });
};
