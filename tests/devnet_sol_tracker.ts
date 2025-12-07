import * as anchor from "@coral-xyz/anchor";

describe("devnet_sol_tracker", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  
  const PROGRAM_ID = new anchor.web3.PublicKey(
    "4Lcp6CnKWi3Nsm52z2aeRstFe4V22KBGocLBDfvRiX1v"
  );

  let program: anchor.Program;

  before(async () => {
    
    const idl = await anchor.Program.fetchIdl(PROGRAM_ID, provider);
    program = new anchor.Program(idl!, PROGRAM_ID, provider);
  });

  it("Initialize and log", async () => {
    const tracker = anchor.web3.Keypair.generate();

    await program.methods
      .initializeTracker(10n) 
      .accounts({
        payer: provider.publicKey,
        tracker: tracker.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([tracker])
      .rpc();

    await program.methods
      .logAirdrop(3n) 
      .accounts({
        tracker: tracker.publicKey,
      })
      .rpc();

    const account = await program.account.devTracker.fetch(tracker.publicKey);
    console.log("Tracker:", account);
  });
});
