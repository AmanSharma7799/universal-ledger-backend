const express = require('express');
const router = express.Router();
const { addEntry, getEntries, verifyLedger } = require('../controllers/ledgerController');

router.post('/add', addEntry);
router.get('/', getEntries);
router.get('/verify', verifyLedger);

module.exports = router;
