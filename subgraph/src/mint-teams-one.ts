import { BigInt, store } from "@graphprotocol/graph-ts";
import {
  LevelUp as LevelUpEvent,
  Mint as MintEvent,
} from "../generated/MintTeamsOne/MintTeamsOne";
import { Levelup, Team } from "../generated/schema";

/*
event Mint(address account, uint indexed tokenId, uint256 indexed level, bytes teamName, bool firstFourMinted);
event LevelUp(address account, uint indexed tokenId, uint256 indexed level);
*/

export function handleLevelUp(event: LevelUpEvent): void {
  // Getting the Previous Token Object
  let id = event.params.tokenId.toI32();
  id = id - 1;
  let oldTeam = Team.load(id.toString());

  if (oldTeam) {
    // Create a new Token
    let newTeam = new Team(event.params.tokenId.toString());

    // Set Details
    newTeam.level = event.params.level;
    newTeam.team = oldTeam.team;
    newTeam.predictor = event.params.account;

    // Save
    newTeam.save();

    // Removing old Team
    store.remove("Team", oldTeam.id);

    // Create a new levelup object in schema
    let levelup = new Levelup(event.params.account);

    // Set the Previous Level
    levelup.prevLevel = new BigInt(id);

    // Set the Current Level
    levelup.nowLevel = event.params.tokenId;

    // Save
    levelup.save();
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
