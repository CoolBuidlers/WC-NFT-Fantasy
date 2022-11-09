import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { FetchTeamsTwoOwnershipTransferred } from "../generated/FetchTeamsTwo/FetchTeamsTwo"

export function createFetchTeamsTwoOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): FetchTeamsTwoOwnershipTransferred {
  let fetchTeamsTwoOwnershipTransferredEvent = changetype<
    FetchTeamsTwoOwnershipTransferred
  >(newMockEvent())

  fetchTeamsTwoOwnershipTransferredEvent.parameters = new Array()

  fetchTeamsTwoOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  fetchTeamsTwoOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return fetchTeamsTwoOwnershipTransferredEvent
}
