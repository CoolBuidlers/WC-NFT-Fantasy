import {
  ReceiveTeamTop16 as ReceiveTeamTop16Event,
  ReceiveTeamTop4 as ReceiveTeamTop4Event,
  ReceiveTeamTop8 as ReceiveTeamTop8Event,
} from "../generated/WorldCupData/WorldCupData";
import { Round } from "../generated/schema";
/*
  event ReceiveTeamTop16(bytes32 requestId, uint256 indexed teamId, uint256 indexed round);
  event ReceiveTeamTop8(bytes32 requestId, uint256 indexed teamId, uint256 indexed round);
  event ReceiveTeamTop4(bytes32 requestId, uint256 indexed teamId, uint256 indexed round);
*/

export function handleReceiveTeamTop16(event: ReceiveTeamTop16Event): void {
  // ID
  const id = "top16";

  // Get Round Object
  let round = Round.load(id);

  // Create a round if it does not exist
  if (!round) {
    round = new Round(id);
    round.countryIds = [event.params.teamId];
  } else {
    let _counties = round.countryIds;
    _counties.push(event.params.teamId);
    round.countryIds = _counties;
  }

  // Save the Object
  round.save();
}

export function handleReceiveTeamTop4(event: ReceiveTeamTop4Event): void {
  // ID
  const id = "top4";

  // Get Round Object
  let round = Round.load(id);

  // Create a round if it does not exist
  if (!round) {
    round = new Round(id);
    round.countryIds = [event.params.teamId];
  } else {
    let _counties = round.countryIds;
    _counties.push(event.params.teamId);
    round.countryIds = _counties;
  }

  // Save the Object
  round.save();
}

export function handleReceiveTeamTop8(event: ReceiveTeamTop8Event): void {
  // ID
  const id = "top8";

  // Get Round Object
  let round = Round.load(id);

  // Create a round if it does not exist
  if (!round) {
    round = new Round(id);
    round.countryIds = [event.params.teamId];
  } else {
    let _counties = round.countryIds;
    _counties.push(event.params.teamId);
    round.countryIds = _counties;
  }

  // Save the Object
  round.save();
}
