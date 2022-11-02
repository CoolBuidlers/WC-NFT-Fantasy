import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AllPredictors,
  FirstFourTeamsMinted,
  OwnershipTransferred,
  TwoExtraTeamsMinted,
  Winners
} from "../generated/WCNFTFantasy/WCNFTFantasy"

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

export function createFirstFourTeamsMintedEvent(
  predictor: Address,
  teamOne: Bytes,
  teamTwo: Bytes,
  teamThree: Bytes,
  teamFour: Bytes
): FirstFourTeamsMinted {
  let firstFourTeamsMintedEvent = changetype<FirstFourTeamsMinted>(
    newMockEvent()
  )

  firstFourTeamsMintedEvent.parameters = new Array()

  firstFourTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("predictor", ethereum.Value.fromAddress(predictor))
  )
  firstFourTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("teamOne", ethereum.Value.fromBytes(teamOne))
  )
  firstFourTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("teamTwo", ethereum.Value.fromBytes(teamTwo))
  )
  firstFourTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("teamThree", ethereum.Value.fromBytes(teamThree))
  )
  firstFourTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("teamFour", ethereum.Value.fromBytes(teamFour))
  )

  return firstFourTeamsMintedEvent
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

export function createTwoExtraTeamsMintedEvent(
  predictor: Address,
  teamFive: Bytes,
  teamSix: Bytes
): TwoExtraTeamsMinted {
  let twoExtraTeamsMintedEvent = changetype<TwoExtraTeamsMinted>(newMockEvent())

  twoExtraTeamsMintedEvent.parameters = new Array()

  twoExtraTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("predictor", ethereum.Value.fromAddress(predictor))
  )
  twoExtraTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("teamFive", ethereum.Value.fromBytes(teamFive))
  )
  twoExtraTeamsMintedEvent.parameters.push(
    new ethereum.EventParam("teamSix", ethereum.Value.fromBytes(teamSix))
  )

  return twoExtraTeamsMintedEvent
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
