import {
  ApprovalForAll as ApprovalForAllEvent,
  LevelUp as LevelUpEvent,
  Mint as MintEvent,
  MintTeamsOneOwnershipTransferred as MintTeamsOneOwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from "../generated/MintTeamsOne/MintTeamsOne";
import { Predictors, Tokens } from "../generated/schema";

/*
event Mint(address account, uint indexed tokenId, uint256 indexed level, bytes teamName, bool firstFourMinted);
event LevelUp(address account, uint indexed tokenId, uint256 indexed level);
*/

export function handleApprovalForAll(event: ApprovalForAllEvent): void {}

export function handleLevelUp(event: LevelUpEvent): void {
  // Getting the token object from token ID
  let token = Tokens.load(event.params.tokenId.toString());

  // Find Level
  token!.level = event.params.level.toI32();

  // Save
  token!.save();
}

export function handleMint(event: MintEvent): void {
  // Create a token Object based on the token ID
  let token = new Tokens(event.params.tokenId.toString());

  // Pass in the user address
  token.user = event.params.account;

  // Get Predictor Object and Position
  let predictor = Predictors.load(event.params.account);
  let count = predictor!.mints.length;

  // Set position, level and teamID(teamName)
  token.position = count;
  token.level = 0;
  token.teamId = event.params.teamName;

  // Set Predictor Token ID
  token.predictors = predictor!.id;

  // Save
  token.save();
}

export function handleMintTeamsOneOwnershipTransferred(
  event: MintTeamsOneOwnershipTransferredEvent
): void {}

export function handleTransferBatch(event: TransferBatchEvent): void {}

export function handleTransferSingle(event: TransferSingleEvent): void {}

export function handleURI(event: URIEvent): void {}
