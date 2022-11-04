import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { currentGame, winner } from "../generated/QuizGame/QuizGame"

export function createcurrentGameEvent(
  caller: Address,
  currentGameId: BigInt
): currentGame {
  let currentGameEvent = changetype<currentGame>(newMockEvent())

  currentGameEvent.parameters = new Array()

  currentGameEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  currentGameEvent.parameters.push(
    new ethereum.EventParam(
      "currentGameId",
      ethereum.Value.fromUnsignedBigInt(currentGameId)
    )
  )

  return currentGameEvent
}

export function createwinnerEvent(winner: Address, gameId: BigInt): winner {
  let winnerEvent = changetype<winner>(newMockEvent())

  winnerEvent.parameters = new Array()

  winnerEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  winnerEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return winnerEvent
}
