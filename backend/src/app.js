const express = require("express");
const cors = require("cors");
const app = express();
const ledgerRoutes = require("./routes/ledgerRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/ledger", ledgerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Universal Ledger backend running on port ${PORT}`);
});
