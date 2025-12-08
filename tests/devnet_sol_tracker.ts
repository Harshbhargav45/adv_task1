import * as anchor from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { expect } from "chai";

describe("counter program", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.DevnetSolTracker;

  const authority = provider.wallet.publicKey;

  let counterPda: PublicKey;
  let bump: number;

  it("Derives PDA", async () => {
    [counterPda, bump] = await PublicKey.findProgramAddressSync(
      [Buffer.from("counter"), authority.toBuffer()],
      program.programId
    );

    console.log("PDA:", counterPda.toBase58());
  });

  it("Initialize counter", async () => {
    await program.methods
      .initialize()
      .accounts({
        counter: counterPda,
        authority,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const state = await program.account.counter.fetch(counterPda);
    expect(state.count.toNumber()).to.equal(0);
  });

  it("Increment counter", async () => {
    await program.methods
      .increment()
      .accounts({
        counter: counterPda,
        authority,
      })
      .rpc();

    const state = await program.account.counter.fetch(counterPda);
    expect(state.count.toNumber()).to.equal(1);
  });
});
