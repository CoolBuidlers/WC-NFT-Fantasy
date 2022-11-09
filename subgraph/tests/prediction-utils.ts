import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AllPredictors,
  OwnershipTransferred,
  TopPoints,
  Winners
} from "../generated/Prediction/Prediction"

export function createAllPredictorsEvent(
  smartContract: Address,
  predictor: Address
): AllPredictors {
  let allPredictorsEvent = changetype<AllPredictors>(newMockEvent())

  allPredictorsEvent.parameters = new Array()

  allPredictorsEvent.parameters.push(
    new ethereum.EventParam(
      "smartContract",
      ethereum.Value.fromAddress(smartContract)
    )
  )
  allPredictorsEvent.parameters.push(
    new ethereum.EventParam("predictor", ethereum.Value.fromAddress(predictor))
  )

  return allPredictorsEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTopPointsEvent(
  firstHighestPoints: BigInt,
  secondHighestPoints: BigInt,
  thirdHighestPoints: BigInt
): TopPoints {
  let topPointsEvent = changetype<TopPoints>(newMockEvent())

  topPointsEvent.parameters = new Array()

  topPointsEvent.parameters.push(
    new ethereum.EventParam(
      "firstHighestPoints",
      ethereum.Value.fromUnsignedBigInt(firstHighestPoints)
    )
  )
  topPointsEvent.parameters.push(
    new ethereum.EventParam(
      "secondHighestPoints",
      ethereum.Value.fromUnsignedBigInt(secondHighestPoints)
    )
  )
  topPointsEvent.parameters.push(
    new ethereum.EventParam(
      "thirdHighestPoints",
      ethereum.Value.fromUnsignedBigInt(thirdHighestPoints)
    )
  )

  return topPointsEvent
}

export function createWinnersEvent(
  winnerOne: Address,
  winnerTwo: Address,
  winnerThree: Address
): Winners {
  let winnersEvent = changetype<Winners>(newMockEvent())

  winnersEvent.parameters = new Array()

  winnersEvent.parameters.push(
    new ethereum.EventParam("winnerOne", ethereum.Value.fromAddress(winnerOne))
  )
  winnersEvent.parameters.push(
    new ethereum.EventParam("winnerTwo", ethereum.Value.fromAddress(winnerTwo))
  )
  winnersEvent.parameters.push(
    new ethereum.EventParam(
      "winnerThree",
      ethereum.Value.fromAddress(winnerThree)
    )
  )

  return winnersEvent
}
