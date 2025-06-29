const express = require('express');
const ledgerRoutes = require('./routes/ledgerRoutes');

const app = express();
app.use(express.json());
app.use('/api/ledger', ledgerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Universal Ledger backend running on port ${PORT}`);
});
