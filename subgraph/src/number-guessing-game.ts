import {
  Ended as EndedEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  NumberGuessingGameOwnershipTransferred as NumberGuessingGameOwnershipTransferredEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  NumberGuessingGameWinners as NumberGuessingGameWinnersEvent,
  NumberGuessingGamecurrentGame as NumberGuessingGamecurrentGameEvent
} from "../generated/NumberGuessingGame/NumberGuessingGame"
import {
  Ended,
  OwnershipTransferRequested,
  NumberGuessingGameOwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  NumberGuessingGameWinners,
  NumberGuessingGamecurrentGame
} from "../generated/schema"

export function handleEnded(event: EndedEvent): void {
  let entity = new Ended(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.player = event.params.player
  entity.gameId = event.params.gameId
  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleNumberGuessingGameOwnershipTransferred(
  event: NumberGuessingGameOwnershipTransferredEvent
): void {
  let entity = new NumberGuessingGameOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {
  let entity = new RequestFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.randomWords = event.params.randomWords
  entity.save()
}

export function handleRequestSent(event: RequestSentEvent): void {
  let entity = new RequestSent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.numWords = event.params.numWords
  entity.save()
}

export function handleNumberGuessingGameWinners(
  event: NumberGuessingGameWinnersEvent
): void {
  let entity = new NumberGuessingGameWinners(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.winner = event.params.winner
  entity.requestId = event.params.requestId
  entity.gameId = event.params.gameId
  entity.save()
}

export function handleNumberGuessingGamecurrentGame(
  event: NumberGuessingGamecurrentGameEvent
): void {
  let entity = new NumberGuessingGamecurrentGame(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.player = event.params.player
  entity.gameId = event.params.gameId
  entity.save()
}
