const ledgerService = require('../services/ledgerService');

const addEntry = (req, res) => {
  const { data } = req.body;
  const entry = ledgerService.addEntry(data);
  res.status(201).json(entry);
};

const getEntries = (req, res) => {
  res.json(ledgerService.getAllEntries());
};

const verifyLedger = (req, res) => {
  const isValid = ledgerService.verifyLedger();
  res.json({ valid: isValid });
};

module.exports = { addEntry, getEntries, verifyLedger };
