import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Ended,
  OwnershipTransferRequested,
  NumberGuessingGameOwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  NumberGuessingGameWinners,
  NumberGuessingGamecurrentGame
} from "../generated/NumberGuessingGame/NumberGuessingGame"

export function createEndedEvent(player: Address, gameId: BigInt): Ended {
  let endedEvent = changetype<Ended>(newMockEvent())

  endedEvent.parameters = new Array()

  endedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  endedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return endedEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createNumberGuessingGameOwnershipTransferredEvent(
  from: Address,
  to: Address
): NumberGuessingGameOwnershipTransferred {
  let numberGuessingGameOwnershipTransferredEvent = changetype<
    NumberGuessingGameOwnershipTransferred
  >(newMockEvent())

  numberGuessingGameOwnershipTransferredEvent.parameters = new Array()

  numberGuessingGameOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  numberGuessingGameOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return numberGuessingGameOwnershipTransferredEvent
}

export function createRequestFulfilledEvent(
  requestId: BigInt,
  randomWords: Array<BigInt>
): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "randomWords",
      ethereum.Value.fromUnsignedBigIntArray(randomWords)
    )
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(
  requestId: BigInt,
  numWords: BigInt
): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestSentEvent.parameters.push(
    new ethereum.EventParam(
      "numWords",
      ethereum.Value.fromUnsignedBigInt(numWords)
    )
  )

  return requestSentEvent
}

export function createNumberGuessingGameWinnersEvent(
  winner: Address,
  requestId: Bytes,
  gameId: BigInt
): NumberGuessingGameWinners {
  let numberGuessingGameWinnersEvent = changetype<NumberGuessingGameWinners>(
    newMockEvent()
  )

  numberGuessingGameWinnersEvent.parameters = new Array()

  numberGuessingGameWinnersEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  numberGuessingGameWinnersEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  numberGuessingGameWinnersEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return numberGuessingGameWinnersEvent
}

export function createNumberGuessingGamecurrentGameEvent(
  player: Address,
  gameId: BigInt
): NumberGuessingGamecurrentGame {
  let numberGuessingGamecurrentGameEvent = changetype<
    NumberGuessingGamecurrentGame
  >(newMockEvent())

  numberGuessingGamecurrentGameEvent.parameters = new Array()

  numberGuessingGamecurrentGameEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  numberGuessingGamecurrentGameEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return numberGuessingGamecurrentGameEvent
}
