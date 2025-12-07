use anchor_lang::prelude::*;

declare_id!("4Lcp6CnKWi3Nsm52z2aeRstFe4V22KBGocLBDfvRiX1v");


#[program] 
pub mod devnet_sol_tracker {
    use super::*;

    pub fn initialize_tracker(ctx: Context<InitializeTracker>, daily_goal: u64) -> Result<()> {
        let tracker = &mut ctx.accounts.tracker;
        tracker.daily_goal = daily_goal;
        tracker.total_airdropped = 0;
        Ok(())
    }

    pub fn log_airdrop(ctx: Context<LogAirdrop>, amount: u64) -> Result<()> {
        let tracker = &mut ctx.accounts.tracker;
        tracker.total_airdropped = tracker.total_airdropped.checked_add(amount).unwrap();
        Ok(())
    }

    pub fn reset_tracker(ctx: Context<ResetTracker>) -> Result<()> {
        let tracker = &mut ctx.accounts.tracker;
        tracker.total_airdropped = 0;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeTracker<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,
    #[account(
        init,
        space = 8 + DevTracker::INIT_SPACE,
        payer = payer
    )]
    pub tracker: Account<'info, DevTracker>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct LogAirdrop<'info> {
    #[account(mut)]
    pub tracker: Account<'info, DevTracker>,
}

#[derive(Accounts)]
pub struct ResetTracker<'info> {
    #[account(mut)]
    pub tracker: Account<'info, DevTracker>,
}

#[account]
#[derive(InitSpace)]
pub struct DevTracker {
    daily_goal: u64,
    total_airdropped: u64,
}