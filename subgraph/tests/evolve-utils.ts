import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { EvolveOwnershipTransferred } from "../generated/Evolve/Evolve"

export function createEvolveOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): EvolveOwnershipTransferred {
  let evolveOwnershipTransferredEvent = changetype<EvolveOwnershipTransferred>(
    newMockEvent()
  )

  evolveOwnershipTransferredEvent.parameters = new Array()

  evolveOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  evolveOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return evolveOwnershipTransferredEvent
}
