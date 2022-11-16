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

  if (!game) {
    game = new Game(id);
    game.people = [event.params.caller];
    game.gameId = event.params.currentGameId;
    game.gameType = "Quiz";
    game.status = false;
  } else {
    // Fill in the Info and pass the caller address
    let _people = game.people;
    _people.push(event.params.caller);
    game.people = _people;
  }

  // Save
  game.save();
}

export function handlewinner(event: winnerEvent): void {
  // Create a Winners Object with unique hash
  const id = event.params.gameId.toString() + "Q" + "W";
  let winner = new Winner(id);
  winner.players = [event.params.winner];
  winner.gameId = event.params.gameId;
  winner.game = "Quiz";

  // Save
  winner.save();

  // Get the game Object from gameid
  const Gid = event.params.gameId.toString() + "Q";
  let game = Game.load(Gid);

  if (game) {
    // Set the status to true
    game.status = true;

    // Save
    game.save();
  }
}
