import { Bytes } from "@graphprotocol/graph-ts";
import {
  Ended as EndedEvent,
  NumberGuessingGameWinners as NumberGuessingGameWinnersEvent,
  NumberGuessingGamecurrentGame as NumberGuessingGamecurrentGameEvent,
} from "../generated/NumberGuessingGame/NumberGuessingGame";
import { Game, Winner } from "../generated/schema";

/*
    // event to keep track of the players for the currentGame ID
    event currentGame(address player, uint256 gameId);
    // event to keep track of winners for that gameId alongside the requestId for the VRF
    event Winners(address winner, bytes32 requestId, uint256 gameId);
    // event to keep track of the deleted players after certain conditions are not met
    event Ended(address player, uint256 gameId);
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);
*/

export function handleEnded(event: EndedEvent): void {
  // Get the Game Object from the game ID
  let game = Game.load(event.params.gameId.toString() + "N");

  if (game) {
    // Remove the person
    let _filtered = game.people as Bytes[];
    if (_filtered) {
      for (let i = 0; i < game.people.length; i++) {
        if (game.people[i] == event.params.player) {
          _filtered.splice(i, 1);
        }
      }
    }
    game.people = _filtered;

    // Save
    game.save();
  }
}

export function handleNumberGuessingGameWinners(
  event: NumberGuessingGameWinnersEvent
): void {
  // Create Winners Unique ID
  const id = event.params.gameId.toString() + "N" + "W";
  let winner = new Winner(id);

  // Pass in the Addresses
  winner.players = [event.params.winner];

  // Pass in the gameId and game
  winner.gameId = event.params.gameId;
  winner.game = "NumberGuess";

  // Save
  winner.save();

  // Get the Game Object and make sure it's set to end
  let game = Game.load(event.params.gameId.toString() + "N");
  if (game) {
    game.status = true;

    // Save
    game.save();
  }
}

export function handleNumberGuessingGamecurrentGame(
  event: NumberGuessingGamecurrentGameEvent
): void {
  // Check if the game exists and create if not based on the game ID
  const id = event.params.gameId.toString() + "N";
  let game = Game.load(id);
  if (!game) {
    game = new Game(id);

    // Add Game ID
    game.gameId = event.params.gameId;

    // Set Game Type
    game.gameType = "NumberGuess";

    // Status false
    game.status = false;

    game.people = [event.params.player];
  } else {
    let _people = game.people;
    _people.push(event.params.player);
    game.people = _people;
  }

  // Save
  game.save();
}
