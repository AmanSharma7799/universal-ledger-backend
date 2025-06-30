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
- 🗑 **Reset endpoint** `/reset` to clear memory and restore genesis block — ideal for Vercel, Railway, Koyeb, etc.
- 🌱 Lightweight, in-memory implementation (can be extended to use PostgreSQL or MongoDB)

---

## 🛠 Tech Stack

- **Node.js** + **Express**
- SHA256 via `crypto` module
- RESTful API structure
- Modular service-based design

---

## 🔗 API Endpoints

| Method | Endpoint              | Description                            |
|--------|-----------------------|----------------------------------------|
| POST   | `/api/ledger/add`     | Add a new JSON entry                   |
| GET    | `/api/ledger`         | Get full ledger                        |
| GET    | `/api/ledger/verify`  | Verify integrity (basic or verbose)    |
| POST   | `/api/ledger/reset`   | 🗑 Reset the ledger to genesis state    |

---

## 🧼 Why Reset?

If you're running this app on a **memory-limited host** (like Vercel, Koyeb, or Railway), the in-memory ledger may grow over time and exceed runtime memory limits.  
The `/reset` endpoint lets you:
- Clear all ledger entries
- Re-initialize with a single **genesis block**
- Avoid out-of-memory crashes

You can call it manually or via the frontend **Reset Ledger** button.

---

## 🚀 Hosted On :

Backend: [https://universal-ledger-backend.onrender.com](https://universal-ledger-backend.onrender.com)

---
