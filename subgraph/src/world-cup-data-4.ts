import { Round } from "../generated/schema";
import { ReceiveTeamTop4 as ReceiveTeamTop4Event } from "../generated/WorldCupData4/WorldCupData4";

// event ReceiveTeamTop4(bytes32 requestId, string indexed teamId);

export function handleReceiveTeamTop4(event: ReceiveTeamTop4Event): void {
  // Get Object
  let round = Round.load("top4");

  // If it doesn't exist, create one with data
  if (!round) {
    round = new Round("top4");

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
