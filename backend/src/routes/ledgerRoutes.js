const express = require("express");
const router = express.Router();
const ledgerController = require("../controllers/ledgerController");

router.post("/add", ledgerController.addEntry);
router.get("/", ledgerController.getEntries);
router.get("/verify", ledgerController.verifyLedger);
router.get("/merkle", ledgerController.getMerkleRoot);
router.post("/reset", ledgerController.resetLedger);

module.exports = router;
