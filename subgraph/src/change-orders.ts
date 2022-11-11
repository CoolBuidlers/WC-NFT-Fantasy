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

  if (predictor) {
    // Loop over every array until you find two with the firstTeam, and secondTeam Token Objects
    let t1: Tokens;
    let ft1 = event.params.firstTeam;
    let t2: Tokens;
    let ft2 = event.params.secondTeam;

    for (let i = 0; i < predictor.mints.length; i++) {
      let _token = Tokens.load(predictor.mints[i]);
      if (_token) {
        if (_token.teamId == ft1) t1 = _token;
        if (_token.teamId == ft2) t2 = _token;
      }
    }

    // Change the positions individually
    let pos1 = t1!.position;
    t1!.position = t2!.position;
    t2!.position = pos1;

    // Save the Token Objects
    t1!.save();
    t2!.save();
  }
}
