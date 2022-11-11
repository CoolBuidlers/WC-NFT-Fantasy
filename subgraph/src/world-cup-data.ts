import {
  WorldCupDataChainlinkCancelled as WorldCupDataChainlinkCancelledEvent,
  WorldCupDataChainlinkFulfilled as WorldCupDataChainlinkFulfilledEvent,
  WorldCupDataChainlinkRequested as WorldCupDataChainlinkRequestedEvent,
  WorldCupDataOwnershipTransferred as WorldCupDataOwnershipTransferredEvent,
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

export function handleWorldCupDataChainlinkCancelled(
  event: WorldCupDataChainlinkCancelledEvent
): void {}

export function handleWorldCupDataChainlinkFulfilled(
  event: WorldCupDataChainlinkFulfilledEvent
): void {}

export function handleWorldCupDataChainlinkRequested(
  event: WorldCupDataChainlinkRequestedEvent
): void {}

export function handleWorldCupDataOwnershipTransferred(
  event: WorldCupDataOwnershipTransferredEvent
): void {}

export function handleReceiveTeamTop16(event: ReceiveTeamTop16Event): void {
  // ID
  const id = "top16";

  // Get Round Object
  let round = Round.load(id);

  // Create a round if it does not exist
  if (!round) round = new Round(id);

  // Getting Team ID From Event
  let teamID = event.params.teamId;

  // If Team ID exists, then push it into the array
  if (teamID) round.countryIds.push(teamID);

  // Save the Object
  round.save();
}

export function handleReceiveTeamTop4(event: ReceiveTeamTop4Event): void {
  // ID
  const id = "top4";

  // Get Round Object
  let round = Round.load(id);

  // Create a round if it does not exist
  if (!round) round = new Round(id);

  // Getting Team ID From Event
  let teamID = event.params.teamId;

  // If Team ID exists, then push it into the array
  if (teamID) round.countryIds.push(teamID);

  // Save the Object
  round.save();
}

export function handleReceiveTeamTop8(event: ReceiveTeamTop8Event): void {
  // ID
  const id = "top8";

  // Get Round Object
  let round = Round.load(id);

  // Create a round if it does not exist
  if (!round) round = new Round(id);

  // Getting Team ID From Event
  let teamID = event.params.teamId;

  // If Team ID exists, then push it into the array
  if (teamID) round.countryIds.push(teamID);

  // Save the Object
  round.save();
}
