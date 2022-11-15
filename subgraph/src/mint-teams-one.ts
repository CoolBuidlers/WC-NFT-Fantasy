import {
  ApprovalForAll as ApprovalForAllEvent,
  LevelUp as LevelUpEvent,
  Mint as MintEvent,
  MintTeamsOneOwnershipTransferred as MintTeamsOneOwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from "../generated/MintTeamsOne/MintTeamsOne";
import { Predictor, Team } from "../generated/schema";

/*
event Mint(address account, uint indexed tokenId, uint256 indexed level, bytes teamName, bool firstFourMinted);
event LevelUp(address account, uint indexed tokenId, uint256 indexed level);
*/

export function handleApprovalForAll(event: ApprovalForAllEvent): void {}

export function handleLevelUp(event: LevelUpEvent): void {
  // Getting the Token Object
  let team = Team.load(event.params.tokenId.toString());

  if (team) {
    // Level Up the relevant token
    team.level = event.params.level;

    // Save
    team.save();
  }
}

export function handleMint(event: MintEvent): void {
  // Get Predictor and If not, create one
  let predictor = Predictor.load(event.params.account);
  if (!predictor) new Predictor(event.params.account);

  // Pass in the Token Information
  if (predictor) {
    // Create new Token Object
    let pack = new Team(event.params.tokenId.toString());
    if (pack) {
      pack.team = event.params.teamName;
      pack.level = event.params.level;
    }

    // Push the token into the Predictor
    if (!predictor.tokens) {
      predictor.tokens = [event.params.tokenId.toString()] as string[];
    } else {
      predictor.tokens!.push(event.params.tokenId.toString());
    }

    // Save
    predictor.save();
    pack.save();
  }
}

export function handleMintTeamsOneOwnershipTransferred(
  event: MintTeamsOneOwnershipTransferredEvent
): void {}

export function handleTransferBatch(event: TransferBatchEvent): void {}

export function handleTransferSingle(event: TransferSingleEvent): void {}

export function handleURI(event: URIEvent): void {}
