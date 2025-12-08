import * as anchor from "@coral-xyz/anchor";
import assert from "assert";

describe("devnet_sol_tracker", () => {
  
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  
  const program = anchor.workspace.DevnetSolTracker as anchor.Program;

  it("Initialize and log", async () => {
    console.log("Program ID:", program.programId.toBase58());

  

    assert.ok(program.programId); 
  });
});
