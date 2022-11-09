import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  MintTeamsTwoLevelUp,
  MintTeamsTwoOwnershipTransferred
} from "../generated/MintTeamsTwo/MintTeamsTwo"

export function createMintTeamsTwoLevelUpEvent(
  account: Address,
  tokenId: BigInt,
  level: BigInt
): MintTeamsTwoLevelUp {
  let mintTeamsTwoLevelUpEvent = changetype<MintTeamsTwoLevelUp>(newMockEvent())

  mintTeamsTwoLevelUpEvent.parameters = new Array()

  mintTeamsTwoLevelUpEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  mintTeamsTwoLevelUpEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  mintTeamsTwoLevelUpEvent.parameters.push(
    new ethereum.EventParam("level", ethereum.Value.fromUnsignedBigInt(level))
  )

  return mintTeamsTwoLevelUpEvent
}

export function createMintTeamsTwoOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): MintTeamsTwoOwnershipTransferred {
  let mintTeamsTwoOwnershipTransferredEvent = changetype<
    MintTeamsTwoOwnershipTransferred
  >(newMockEvent())

  mintTeamsTwoOwnershipTransferredEvent.parameters = new Array()

  mintTeamsTwoOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  mintTeamsTwoOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return mintTeamsTwoOwnershipTransferredEvent
}
