import { Round } from "../generated/schema";
import { ReceiveTeamTop16 as ReceiveTeamTop16Event } from "../generated/WorldCupData16/WorldCupData16";

// event ReceiveTeamTop16(bytes32 requestId, string indexed teamId);

export function handleReceiveTeamTop16(event: ReceiveTeamTop16Event): void {
  // Get Object
  let round = Round.load("top16");

  // If it doesn't exist, create one with data
  if (!round) {
    round = new Round("top16");

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
