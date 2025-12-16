use anchor_lang::prelude::*;

declare_id!("CfWC2webwro4JrqJiE9Sv5roEHnGmH5ZEHCfqxysGYpU");



#[program]
pub mod like_dislike_counter {
    use super::*;

    
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.likes = 0;
        counter.dislikes = 0;
        Ok(())
    }

    pub fn like(ctx: Context<Update>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.likes = counter.likes.saturating_add(1);
        Ok(())
    }

    pub fn dislike(ctx: Context<Update>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.dislikes = counter.dislikes.saturating_add(1);
        Ok(())
    }

    pub fn reset(ctx: Context<Update>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.likes = 0;
        counter.dislikes = 0;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8 + 8)]
    pub counter: Account<'info, LikeDislikeCounter>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub counter: Account<'info, LikeDislikeCounter>,
}

#[account]
pub struct LikeDislikeCounter {
    pub likes: u64,
    pub dislikes: u64,
}