import { TeamsSwapped as TeamsSwappedEvent } from "../generated/ChangeOrders/ChangeOrders";
import { Swap } from "../generated/schema";

// event TeamsSwapped(address predictor, bytes firstTeam, bytes secondTeam, uint indexed round);

export function handleTeamsSwapped(event: TeamsSwappedEvent): void {
  // Create Unique Hash
  let uid =
    event.params.predictor.toHexString() +
    event.params.firstTeam.toHexString() +
    event.params.secondTeam.toHexString();

  // Create Swap Object
  let swap = new Swap(uid);

  // Pass in Values
  swap.first = event.params.firstTeam;
  swap.second = event.params.secondTeam;

  // Save
  swap.save();
}
