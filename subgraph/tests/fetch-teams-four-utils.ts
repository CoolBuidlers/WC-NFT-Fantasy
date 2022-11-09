import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { FetchTeamsFourOwnershipTransferred } from "../generated/FetchTeamsFour/FetchTeamsFour"

export function createFetchTeamsFourOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): FetchTeamsFourOwnershipTransferred {
  let fetchTeamsFourOwnershipTransferredEvent = changetype<
    FetchTeamsFourOwnershipTransferred
  >(newMockEvent())

  fetchTeamsFourOwnershipTransferredEvent.parameters = new Array()

  fetchTeamsFourOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  fetchTeamsFourOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return fetchTeamsFourOwnershipTransferredEvent
}
