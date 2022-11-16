import { BigInt } from "@graphprotocol/graph-ts";
import {
  LevelUp as LevelUpEvent,
  Mint as MintEvent,
} from "../generated/MintTeamsOne/MintTeamsOne";
import { Predictor, Team } from "../generated/schema";

/*
event Mint(address account, uint indexed tokenId, uint256 indexed level, bytes teamName, bool firstFourMinted);
event LevelUp(address account, uint indexed tokenId, uint256 indexed level);
*/

export function handleLevelUp(event: LevelUpEvent): void {
  // Getting the Token Object
  let team = Team.load(event.params.tokenId.toString());

  if (team) {
    // Level Up the relevant token
    team.level = event.params.level;

    // Save
    team.save();
  }
}

export function handleMint(event: MintEvent): void {
  // Create new Token Object
  let team = new Team(event.params.tokenId.toString());

  // Fill in values
  if (team) {
    team.team = event.params.teamName;
    team.level = event.params.level;
    team.predictor = event.params.account;

    // Save
    team.save();
  }
}
