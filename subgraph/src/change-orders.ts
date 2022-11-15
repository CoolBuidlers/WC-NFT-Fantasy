import { BigInt } from "@graphprotocol/graph-ts";
import {
  ChangeOrdersOwnershipTransferred as ChangeOrdersOwnershipTransferredEvent,
  TeamsSwapped as TeamsSwappedEvent,
} from "../generated/ChangeOrders/ChangeOrders";
import { Predictor, Swap, Team } from "../generated/schema";

// event TeamsSwapped(address predictor, bytes firstTeam, bytes secondTeam, uint indexed round);

export function handleChangeOrdersOwnershipTransferred(
  event: ChangeOrdersOwnershipTransferredEvent
): void {}

export function handleTeamsSwapped(event: TeamsSwappedEvent): void {
  // Get Predictors Object based on the predictor address
  let predictor = Predictor.load(event.params.predictor);

  // Swap teams
  if (predictor) {
    let first: i32 = 0;
    let second: i32 = 0;

    for (let i = 0; i < predictor.tokens!.length; i++) {
      let _token = Team.load(predictor.tokens![i]);
      if (_token && _token.team == event.params.firstTeam) {
        first = i;
      } else if (_token && _token.team == event.params.secondTeam) {
        second = i;
      }
    }

    let _side = predictor.tokens![first];
    predictor.tokens![first] = predictor.tokens![second];
    predictor.tokens![second] = _side;
  }

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
