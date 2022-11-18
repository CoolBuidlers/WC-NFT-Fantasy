import { LevelUp as LevelUpEvent } from "../generated/MintTeamsTwo/MintTeamsTwo";
import { Levelup, Team } from "../generated/schema";
import { store } from "@graphprotocol/graph-ts";

// event LevelUp(address account, uint indexed tokenId, uint256 indexed level);

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

    // Create a new levelup object in schema
    let levelup = new Levelup(event.params.account);

    // Set the Previous Level
    levelup.prevLevel = oldTeam.level;

    // Set the Current Level
    levelup.nowLevel = event.params.level;

    // Save
    levelup.save();

    // Removing old Team
    store.remove("Team", oldTeam.id);
  }
}
