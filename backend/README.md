# Backend - WC NFT Fantasy

We have made alot of complicated contracts for the game to work in the best way as possible.

## Contracts

- Contract WCNFTFantasy/Prediction.sol - Allows predictors to mint their teams, deposit their winners, and this chooses the winners using VRF. Keepers gets called every 24 hours to check the conditions of the game.
- Contract ChangeOrders - Allows predictors to change the order of their prediction everytime worldcup enters a new round
- Contract Evolve - Predictors can evolve their teams if that team has made it to tne next worldcup round
- Contract MintTeamsOne/Two - This is where the nfts exists gets called by Prediction.sol for users to be able to mint their teams
- Contract FetchTeams/One/Two/Three/Four - Fetches the teams that are still in the Worldcup
- Contract RetrieveRandomNumber - Fetches random number from VRF
- Contract WorldCupData16/8/4 - Calls the API To retrieve the teams that are still in the worldcup
- Contract QuizGame - Predictors can enter two quiz games and potentially win an nft
- Contract NumberGuessingGame - Predictors can guess the random number from the VRF and potentially win an nft

## Used Tech

- Hardhat
- Chainlink VRF
- Chainlink Data Feeds
- Chainlink Automation
- Chainlink API

## Installation

1. Install the dependancies using `yarn`
2. You can deploy the contracts using `npx hardhat run scripts/deploy.ts`. Make sure to configure the location in the `hardhat.config.ts`
