import {
  currentGame as currentGameEvent,
  winner as winnerEvent
} from "../generated/QuizGame/QuizGame"
import { currentGame, winner } from "../generated/schema"

export function handlecurrentGame(event: currentGameEvent): void {
  let entity = new currentGame(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caller = event.params.caller
  entity.currentGameId = event.params.currentGameId
  entity.save()
}

export function handlewinner(event: winnerEvent): void {
  let entity = new winner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.winner = event.params.winner
  entity.gameId = event.params.gameId
  entity.save()
}
