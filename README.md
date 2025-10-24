Devnet Sol Tracker

A simple on-chain tracker for developers to log their daily devnet SOL usage.

User Stories

As a developer, I can initialize my personal tracker account with a daily SOL usage goal.

As a developer, I can log every airdrop I request.

As a developer, I can reset my tracker to 0 for the next testing day.

If I don’t connect my wallet, I should not be able to interact with the tracker.


Architectural Diagram



Getting Started

Clone & Install Locally

git clone https://github.com/Harshbhargav45/adv_task1.git
cd adv_task1
npm install

Anchor (Solana Program — Rust + Anchor)

This is a Solana program written in Rust using the Anchor framework.

Commands

You can use any normal Anchor commands. Either move to the anchor directory and run the anchor command or prefix the command with npm.

npm run setup              # Sync program ID (declare_id)
npm run anchor-build       # Build the program
npm run anchor-localnet    # Start local validator with program deployed
npm run anchor-test        # Run tests
npm run anchor deploy --provider.cluster devnet   # Deploy to Devnet

