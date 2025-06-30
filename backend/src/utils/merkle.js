const crypto = require("crypto");

function hash(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function calculateMerkleRoot(leaves) {
  if (leaves.length === 0) return null;
  if (leaves.length === 1) return leaves[0];

  while (leaves.length > 1) {
    let newLevel = [];

    for (let i = 0; i < leaves.length; i += 2) {
      const left = leaves[i];
      const right = i + 1 < leaves.length ? leaves[i + 1] : left;
      const combined = left + right;
      newLevel.push(hash(combined));
    }

    leaves = newLevel;
  }

  return leaves[0];
}

module.exports = {
  hash,
  calculateMerkleRoot,
};
