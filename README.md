# 🔐 Mini-Google Cloud Universal Ledger (Backend)

A simplified, blockchain-inspired **tamper-evident ledger system**, modeled after **Google Cloud Universal Ledger**.

This backend application allows you to **append entries**, **verify integrity**, and **audit logs** using SHA256-based hash chaining — without needing a full blockchain.

---

## 🚀 Features

- ✅ Append-only entries (no edits or deletes)
- 🔐 Cryptographic hash chaining (SHA-256)
- 📜 Full audit trail
- 🔍 Ledger integrity verification
- 🧠 Detailed tamper detection with `/verify?verbose=true`
- 🌱 Lightweight, in-memory implementation (can be extended to use PostgreSQL or MongoDB)

---

## 🛠 Tech Stack

- **Node.js** + **Express**
- SHA256 via `crypto` module
- RESTful API structure
- Modular service-based design

---
