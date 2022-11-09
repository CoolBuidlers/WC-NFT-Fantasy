import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  WorldCupDataChainlinkCancelled,
  WorldCupDataChainlinkFulfilled,
  WorldCupDataChainlinkRequested,
  WorldCupDataOwnershipTransferred,
  ReceiveTeamTop16,
  ReceiveTeamTop4,
  ReceiveTeamTop8
} from "../generated/WorldCupData/WorldCupData"

export function createWorldCupDataChainlinkCancelledEvent(
  id: Bytes
): WorldCupDataChainlinkCancelled {
  let worldCupDataChainlinkCancelledEvent = changetype<
    WorldCupDataChainlinkCancelled
  >(newMockEvent())

  worldCupDataChainlinkCancelledEvent.parameters = new Array()

  worldCupDataChainlinkCancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return worldCupDataChainlinkCancelledEvent
}

export function createWorldCupDataChainlinkFulfilledEvent(
  id: Bytes
): WorldCupDataChainlinkFulfilled {
  let worldCupDataChainlinkFulfilledEvent = changetype<
    WorldCupDataChainlinkFulfilled
  >(newMockEvent())

  worldCupDataChainlinkFulfilledEvent.parameters = new Array()

  worldCupDataChainlinkFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return worldCupDataChainlinkFulfilledEvent
}

export function createWorldCupDataChainlinkRequestedEvent(
  id: Bytes
): WorldCupDataChainlinkRequested {
  let worldCupDataChainlinkRequestedEvent = changetype<
    WorldCupDataChainlinkRequested
  >(newMockEvent())

  worldCupDataChainlinkRequestedEvent.parameters = new Array()

  worldCupDataChainlinkRequestedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return worldCupDataChainlinkRequestedEvent
}

export function createWorldCupDataOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): WorldCupDataOwnershipTransferred {
  let worldCupDataOwnershipTransferredEvent = changetype<
    WorldCupDataOwnershipTransferred
  >(newMockEvent())

  worldCupDataOwnershipTransferredEvent.parameters = new Array()

  worldCupDataOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  worldCupDataOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return worldCupDataOwnershipTransferredEvent
}

export function createReceiveTeamTop16Event(
  requestId: Bytes,
  teamId: BigInt,
  round: BigInt,
  rank: BigInt
): ReceiveTeamTop16 {
  let receiveTeamTop16Event = changetype<ReceiveTeamTop16>(newMockEvent())

  receiveTeamTop16Event.parameters = new Array()

  receiveTeamTop16Event.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  receiveTeamTop16Event.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  receiveTeamTop16Event.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  receiveTeamTop16Event.parameters.push(
    new ethereum.EventParam("rank", ethereum.Value.fromUnsignedBigInt(rank))
  )

  return receiveTeamTop16Event
}

export function createReceiveTeamTop4Event(
  requestId: Bytes,
  teamId: BigInt,
  round: BigInt,
  rank: BigInt
): ReceiveTeamTop4 {
  let receiveTeamTop4Event = changetype<ReceiveTeamTop4>(newMockEvent())

  receiveTeamTop4Event.parameters = new Array()

  receiveTeamTop4Event.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  receiveTeamTop4Event.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  receiveTeamTop4Event.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  receiveTeamTop4Event.parameters.push(
    new ethereum.EventParam("rank", ethereum.Value.fromUnsignedBigInt(rank))
  )

  return receiveTeamTop4Event
}

export function createReceiveTeamTop8Event(
  requestId: Bytes,
  teamId: BigInt,
  round: BigInt,
  rank: BigInt
): ReceiveTeamTop8 {
  let receiveTeamTop8Event = changetype<ReceiveTeamTop8>(newMockEvent())

  receiveTeamTop8Event.parameters = new Array()

  receiveTeamTop8Event.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  receiveTeamTop8Event.parameters.push(
    new ethereum.EventParam("teamId", ethereum.Value.fromUnsignedBigInt(teamId))
  )
  receiveTeamTop8Event.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )
  receiveTeamTop8Event.parameters.push(
    new ethereum.EventParam("rank", ethereum.Value.fromUnsignedBigInt(rank))
  )

  return receiveTeamTop8Event
}
