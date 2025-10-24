Devnet Sol Tracker

A simple on-chain tracker for developers to log their daily devnet SOL usage.

User Stories

As a developer, I can initialize my personal tracker account with a daily SOL usage goal.

As a developer, I can log every airdrop I request (example: 2 SOL, 5 SOL, etc).

As a developer, I can reset my tracker to 0 for the next testing day.

If I don’t connect my wallet, I should not be able to interact with the tracker.


## Architectural Diagram

![Devnet Sol Tracker Architecture](./architecture.png)

Getting Started

Install Dependencies

npm install

Anchor — Solana Program Commands

npm run setup        # Sync program ID
npm run anchor-build # Build the program
npm run anchor-localnet # Start local validator
default: npm run anchor-test # Run tests
npm run anchor deploy --provider.cluster devnet # Deploy to devnet

Web / Frontend (optional)

npm run dev  # Start the frontend
npm run build # Build for production

Future Roadmap

Add warnings if goal not reached

Auto-fetch wallet balance

Frontend dashboard


