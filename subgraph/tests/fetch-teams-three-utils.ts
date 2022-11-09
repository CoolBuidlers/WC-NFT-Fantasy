import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { FetchTeamsThreeOwnershipTransferred } from "../generated/FetchTeamsThree/FetchTeamsThree"

export function createFetchTeamsThreeOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): FetchTeamsThreeOwnershipTransferred {
  let fetchTeamsThreeOwnershipTransferredEvent = changetype<
    FetchTeamsThreeOwnershipTransferred
  >(newMockEvent())

  fetchTeamsThreeOwnershipTransferredEvent.parameters = new Array()

  fetchTeamsThreeOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  fetchTeamsThreeOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return fetchTeamsThreeOwnershipTransferredEvent
}
