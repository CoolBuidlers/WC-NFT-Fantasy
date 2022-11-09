import {
  ChangeOrdersOwnershipTransferred as ChangeOrdersOwnershipTransferredEvent,
  TeamsSwapped as TeamsSwappedEvent,
} from "../generated/ChangeOrders/ChangeOrders";
import { Predictors, Tokens } from "../generated/schema";

// event TeamsSwapped(address predictor, bytes firstTeam, bytes secondTeam, uint indexed round);

export function handleChangeOrdersOwnershipTransferred(
  event: ChangeOrdersOwnershipTransferredEvent
): void {}

export function handleTeamsSwapped(event: TeamsSwappedEvent): void {
  // Get Predictors Object based on the predictor address
  let predictor = Predictors.load(event.params.predictor);

  // Loop over every array until you find two with the firstTeam, and secondTeam Token Objects
  let t1: Tokens;
  let t2: Tokens;
  predictor!.mints.forEach((curr, index) => {
    let _token = Tokens.load(curr);
    if (_token!.teamId == event.params.firstTeam) t1 = _token!;
    if (_token!.teamId == event.params.secondTeam) t2 = _token!;
  });

  // Change the positions individually
  let pos1 = t1!.position;
  t1!.position = t2!.position;
  t2!.position = pos1;

  // Save the Token Objects
  t1!.save();
  t2!.save();
}
