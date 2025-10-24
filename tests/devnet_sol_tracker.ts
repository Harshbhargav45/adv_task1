import * as anchor from "@coral-xyz/anchor";

describe("devnet_sol_tracker", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.DevnetSolTracker;

  it("Initialize and log", async () => {
    const tracker = anchor.web3.Keypair.generate();

    await program.methods
      .initializeTracker(new anchor.BN(10))
      .accounts({
        payer: program.provider.publicKey,
        tracker: tracker.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([tracker])
      .rpc();

    await program.methods
      .logAirdrop(new anchor.BN(3))
      .accounts({ tracker: tracker.publicKey })
      .rpc();

    const account = await program.account.devTracker.fetch(tracker.publicKey);
    console.log("Tracker:", account);
  });
});
