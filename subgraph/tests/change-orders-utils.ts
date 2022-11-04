import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  ChangeOrdersOwnershipTransferred,
  TeamsSwapped
} from "../generated/ChangeOrders/ChangeOrders"

export function createChangeOrdersOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ChangeOrdersOwnershipTransferred {
  let changeOrdersOwnershipTransferredEvent = changetype<
    ChangeOrdersOwnershipTransferred
  >(newMockEvent())

  changeOrdersOwnershipTransferredEvent.parameters = new Array()

  changeOrdersOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  changeOrdersOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return changeOrdersOwnershipTransferredEvent
}

export function createTeamsSwappedEvent(
  predictor: Address,
  firstTeam: Bytes,
  secondTeam: Bytes,
  round: BigInt
): TeamsSwapped {
  let teamsSwappedEvent = changetype<TeamsSwapped>(newMockEvent())

  teamsSwappedEvent.parameters = new Array()

  teamsSwappedEvent.parameters.push(
    new ethereum.EventParam("predictor", ethereum.Value.fromAddress(predictor))
  )
  teamsSwappedEvent.parameters.push(
    new ethereum.EventParam("firstTeam", ethereum.Value.fromBytes(firstTeam))
  )
  teamsSwappedEvent.parameters.push(
    new ethereum.EventParam("secondTeam", ethereum.Value.fromBytes(secondTeam))
  )
  teamsSwappedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return teamsSwappedEvent
}
