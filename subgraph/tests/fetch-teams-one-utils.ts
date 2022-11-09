import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { FetchTeamsOneOwnershipTransferred } from "../generated/FetchTeamsOne/FetchTeamsOne"

export function createFetchTeamsOneOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): FetchTeamsOneOwnershipTransferred {
  let fetchTeamsOneOwnershipTransferredEvent = changetype<
    FetchTeamsOneOwnershipTransferred
  >(newMockEvent())

  fetchTeamsOneOwnershipTransferredEvent.parameters = new Array()

  fetchTeamsOneOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  fetchTeamsOneOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return fetchTeamsOneOwnershipTransferredEvent
}
