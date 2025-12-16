# 👍👎 Like / Dislike Counter – Solana Program

A simple **on-chain Like & Dislike Counter** built on the **Solana blockchain** using the **Anchor framework**.  
This program allows users to **initialize a counter account**, **like**, and **dislike**, with all state stored **on-chain and verifiable**.

This project is designed to demonstrate:
- Anchor program structure
- Account initialization and mutation
- TypeScript client interaction
- Real-world dApp patterns (social engagement)

---

## 🚀 Features

- Initialize a counter account
- Increment likes
- Increment dislikes
- Fetch on-chain state
- TypeScript test coverage using Anchor

---

## 🧑‍💻 User Stories

### 1️⃣ As a user
> I want to like a post so that my interaction is recorded on-chain and cannot be tampered with.

### 2️⃣ As a user
> I want to dislike a post so that I can express negative feedback transparently.

### 3️⃣ As a developer
> I want to store likes and dislikes on-chain so that the data is verifiable and censorship-resistant.

### 4️⃣ As a frontend developer
> I want to fetch the latest like/dislike counts from the blockchain and display them in the UI.

### 5️⃣ As a protocol designer
> I want a simple counter program that can later be extended to prevent double likes, add PDA-based accounts, or support per-post counters.

---

## 🏗 Architecture Diagram

> 📌 **To be added later**

<!--
Architecture diagram will be added here.
This section will contain a Mermaid / Excalidraw diagram showing:
User → TypeScript Client → Anchor Program → Counter Account → Blockchain
-->

---

## 🧱 Program Overview

### On-chain State
The program maintains a single on-chain account containing:
- `likes: u64`
- `dislikes: u64`

### Instructions
- `initialize` – Creates and initializes the counter account
- `like` – Increments the like counter
- `dislike` – Increments the dislike counter

---

## 🛠 Tech Stack

- **Solana** – Blockchain
- **Anchor** – Solana framework
- **Rust** – On-chain program
- **TypeScript** – Client & tests
- **Mocha + ts-mocha** – Testing framework

---

## 🧪 Testing

Tests are written in **TypeScript** using Anchor’s testing environment.


```bash
anchor test
