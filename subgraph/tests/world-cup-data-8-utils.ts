import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  WorldCupData8ChainlinkCancelled,
  WorldCupData8ChainlinkFulfilled,
  WorldCupData8ChainlinkRequested,
  WorldCupData8OwnershipTransferred,
  WorldCupData8ReceiveTeamTop8
} from "../generated/WorldCupData8/WorldCupData8"

export function createWorldCupData8ChainlinkCancelledEvent(
  id: Bytes
): WorldCupData8ChainlinkCancelled {
  let worldCupData8ChainlinkCancelledEvent = changetype<
    WorldCupData8ChainlinkCancelled
  >(newMockEvent())

  worldCupData8ChainlinkCancelledEvent.parameters = new Array()

  worldCupData8ChainlinkCancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return worldCupData8ChainlinkCancelledEvent
}

export function createWorldCupData8ChainlinkFulfilledEvent(
  id: Bytes
): WorldCupData8ChainlinkFulfilled {
  let worldCupData8ChainlinkFulfilledEvent = changetype<
    WorldCupData8ChainlinkFulfilled
  >(newMockEvent())

  worldCupData8ChainlinkFulfilledEvent.parameters = new Array()

  worldCupData8ChainlinkFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return worldCupData8ChainlinkFulfilledEvent
}

export function createWorldCupData8ChainlinkRequestedEvent(
  id: Bytes
): WorldCupData8ChainlinkRequested {
  let worldCupData8ChainlinkRequestedEvent = changetype<
    WorldCupData8ChainlinkRequested
  >(newMockEvent())

  worldCupData8ChainlinkRequestedEvent.parameters = new Array()

  worldCupData8ChainlinkRequestedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return worldCupData8ChainlinkRequestedEvent
}

export function createWorldCupData8OwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): WorldCupData8OwnershipTransferred {
  let worldCupData8OwnershipTransferredEvent = changetype<
    WorldCupData8OwnershipTransferred
  >(newMockEvent())

  worldCupData8OwnershipTransferredEvent.parameters = new Array()

  worldCupData8OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  worldCupData8OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return worldCupData8OwnershipTransferredEvent
}

export function createWorldCupData8ReceiveTeamTop8Event(
  requestId: Bytes,
  teamId: string
): WorldCupData8ReceiveTeamTop8 {
  let worldCupData8ReceiveTeamTop8Event = changetype<
    WorldCupData8ReceiveTeamTop8
  >(newMockEvent())

  worldCupData8ReceiveTeamTop8Event.parameters = new Array()

  worldCupData8ReceiveTeamTop8Event.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  worldCupData8ReceiveTeamTop8Event.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromString(teamId))
  )

  return worldCupData8ReceiveTeamTop8Event
}
