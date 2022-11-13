import {
  currentGame as currentGameEvent,
  winner as winnerEvent,
} from "../generated/QuizGame/QuizGame";
import { Game, Winner } from "../generated/schema";

/*
    event currentGame(address caller, uint256 currentGameId);
    event winner(address winner, uint256 gameId);
*/

export function handlecurrentGame(event: currentGameEvent): void {
  // Create a Game Object if it doesnt exist from Game ID
  const id = event.params.currentGameId.toString() + "Q";
  let game = Game.load(id);

  if (!game) game = new Game(id);

  // Fill in the Info and pass the caller address
  game.people!.push(event.params.caller);
  game.gameId = event.params.currentGameId;
  game.gameType = "Quiz";
  game.status = false;

  // Save
  game.save();
}

export function handlewinner(event: winnerEvent): void {
  // Create a Winners Object with unique hash
  const id = event.params.gameId.toString() + "Q" + "W";
  let winner = Winner.load(id);

  if (!winner) winner = new Winner(id);

  // Pass the addresses in
  winner.players.push(event.params.winner);
  winner.gameId = event.params.gameId;
  winner.game = "Quiz";

  // Save
  winner.save();

  // Get the game Object from gameid
  const Gid = event.params.gameId.toString() + "Q";
  let game = Game.load(Gid);

  // Set the status to true
  game!.status = true;

  // Save
  game!.save();
}
