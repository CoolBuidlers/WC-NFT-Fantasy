import { Round } from "../generated/schema";
import { ReceiveTeamTop8 as ReceiveTeamTop8Event } from "../generated/WorldCupData8/WorldCupData8";

// event ReceiveTeamTop8(bytes32 requestId, string indexed teamId);

export function handleReceiveTeamTop8(event: ReceiveTeamTop8Event): void {
  // Get Object
  let round = Round.load("top8");

  // If it doesn't exist, create one with data
  if (!round) {
    round = new Round("top8");

    // Push the array
    round.countryIds = [event.params.teamId.toString()] as string[];
  } else {
    let _countries = round.countryIds;
    _countries.push(event.params.teamId.toString());
    round.countryIds = _countries;
  }

  // Save
  round.save();
}
