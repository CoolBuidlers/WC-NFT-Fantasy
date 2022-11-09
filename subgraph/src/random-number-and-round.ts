import {
  ChainlinkCancelled as ChainlinkCancelledEvent,
  ChainlinkFulfilled as ChainlinkFulfilledEvent,
  ChainlinkRequested as ChainlinkRequestedEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  RandomNumberAndRoundOwnershipTransferred as RandomNumberAndRoundOwnershipTransferredEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  RoundChanged as RoundChangedEvent,
} from "../generated/RandomNumberAndRound/RandomNumberAndRound";

export function handleChainlinkCancelled(
  event: ChainlinkCancelledEvent
): void {}

export function handleChainlinkFulfilled(
  event: ChainlinkFulfilledEvent
): void {}

export function handleChainlinkRequested(
  event: ChainlinkRequestedEvent
): void {}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {}

export function handleRandomNumberAndRoundOwnershipTransferred(
  event: RandomNumberAndRoundOwnershipTransferredEvent
): void {}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {}

export function handleRequestSent(event: RequestSentEvent): void {}

export function handleRoundChanged(event: RoundChangedEvent): void {}
