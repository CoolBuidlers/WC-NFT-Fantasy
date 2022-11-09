import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Ended,
  NumberGuessingGameOwnershipTransferRequested,
  NumberGuessingGameOwnershipTransferred,
  NumberGuessingGameRequestFulfilled,
  NumberGuessingGameRequestSent,
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

export function createNumberGuessingGameOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): NumberGuessingGameOwnershipTransferRequested {
  let numberGuessingGameOwnershipTransferRequestedEvent = changetype<
    NumberGuessingGameOwnershipTransferRequested
  >(newMockEvent())

  numberGuessingGameOwnershipTransferRequestedEvent.parameters = new Array()

  numberGuessingGameOwnershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  numberGuessingGameOwnershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return numberGuessingGameOwnershipTransferRequestedEvent
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

export function createNumberGuessingGameRequestFulfilledEvent(
  requestId: BigInt,
  randomWords: Array<BigInt>
): NumberGuessingGameRequestFulfilled {
  let numberGuessingGameRequestFulfilledEvent = changetype<
    NumberGuessingGameRequestFulfilled
  >(newMockEvent())

  numberGuessingGameRequestFulfilledEvent.parameters = new Array()

  numberGuessingGameRequestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  numberGuessingGameRequestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "randomWords",
      ethereum.Value.fromUnsignedBigIntArray(randomWords)
    )
  )

  return numberGuessingGameRequestFulfilledEvent
}

export function createNumberGuessingGameRequestSentEvent(
  requestId: BigInt,
  numWords: BigInt
): NumberGuessingGameRequestSent {
  let numberGuessingGameRequestSentEvent = changetype<
    NumberGuessingGameRequestSent
  >(newMockEvent())

  numberGuessingGameRequestSentEvent.parameters = new Array()

  numberGuessingGameRequestSentEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  numberGuessingGameRequestSentEvent.parameters.push(
    new ethereum.EventParam(
      "numWords",
      ethereum.Value.fromUnsignedBigInt(numWords)
    )
  )

  return numberGuessingGameRequestSentEvent
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
